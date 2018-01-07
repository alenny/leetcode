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
const maxPathSum = function (root) {
    if (!root) {
        return 0;
    }
    let status = { maxSum: Number.NEGATIVE_INFINITY };
    traverse(root, status);
    return status.maxSum;
};

function traverse(node, status) {
    if (node.left) {
        traverse(node.left, status);
    }
    if (node.right) {
        traverse(node.right, status);
    }
    let maxSumTopEndLeft = node.left ? node.left.maxSumTopEndHere : 0;
    let maxSumTopEndRight = node.right ? node.right.maxSumTopEndHere : 0;
    node.maxSumTopEndHere = Math.max(maxSumTopEndLeft, maxSumTopEndRight, 0) + node.val;
    let maxSumTopHere = Math.max(node.maxSumTopEndHere, maxSumTopEndLeft + node.val + maxSumTopEndRight);
    if (maxSumTopHere > status.maxSum) {
        status.maxSum = maxSumTopHere;
    }
}

module.exports = maxPathSum;