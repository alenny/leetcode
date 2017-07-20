/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isBalanced = function (root) {
    return isBalancedWithHeight(root) >= 0;
};

const isBalancedWithHeight = function (r) {
    // return -1 if not balanced; otherwise return height.
    if (r === null) {
        return 0;
    }
    const leftHeight = isBalancedWithHeight(r.left);
    const rightHeight = isBalancedWithHeight(r.right);
    return leftHeight >= 0 && rightHeight >= 0 && Math.abs(leftHeight - rightHeight) <= 1 ? Math.max(leftHeight, rightHeight) + 1 : -1;
}

module.exports = isBalanced;