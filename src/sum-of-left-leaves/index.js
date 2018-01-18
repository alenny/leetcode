/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const sumOfLeftLeaves = function (root) {
    return sumHelper(root, false);
};

function sumHelper(node, isLeftChild) {
    if (!node) {
        return 0;
    }
    if (!node.left && !node.right && isLeftChild) {
        return node.val;
    }
    return sumHelper(node.left, true) + sumHelper(node.right, false);
}

module.exports = sumOfLeftLeaves;