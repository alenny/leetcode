/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (root, k) {
    return traverse(root, { i: k }).val;
};

function traverse(node, status) {
    if (!node) {
        return null;
    }
    let ret = traverse(node.left, status);
    if (ret) {
        return ret;
    }
    --status.i;
    if (status.i === 0) {
        return node;
    }
    return traverse(node.right, status);
}

module.exports = kthSmallest;