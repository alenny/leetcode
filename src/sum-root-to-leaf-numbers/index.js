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
const sumNumbers = function (root) {
    if (!root) {
        return 0;
    }
    let status = { sum: 0 };
    traverse(root, status, 0);
    return status.sum;
};

function traverse(node, status, prevNum) {
    if (!node.left && !node.right) {
        status.sum += prevNum * 10 + node.val;
        return;
    }
    let currNum = prevNum * 10 + node.val;
    if (node.left) {
        traverse(node.left, status, currNum);
    }
    if (node.right) {
        traverse(node.right, status, currNum);
    }
}

module.exports = sumNumbers;