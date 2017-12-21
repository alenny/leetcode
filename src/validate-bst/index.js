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
const isValidBST = function (root) {
    return isValidBSTHelper(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
};

function isValidBSTHelper(node, min, max) {
    if (!node) {
        return true;
    }
    if (node.val <= min || node.val >= max) {
        return false;
    }
    return isValidBSTHelper(node.left, min, node.val) && isValidBSTHelper(node.right, node.val, max);
}

module.exports = isValidBST;