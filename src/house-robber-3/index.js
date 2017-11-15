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
class Result {
    constructor(nodeResult, leftResult, rightResult) {
        this.nodeResult = nodeResult;
        this.leftResult = leftResult;
        this.rightResult = rightResult;
    }
}

const rob = function (root) {
    return robHelper(root).nodeResult;
};

function robHelper(node) {
    if (!node) {
        return new Result(0, 0, 0);
    }
    if (!node.left && !node.right) {
        return new Result(node.val, 0, 0);
    }
    let left = robHelper(node.left);
    let leftLeft = left.leftResult;
    let leftRight = left.rightResult;
    let right = robHelper(node.right);
    let rightLeft = right.leftResult;
    let rightRight = right.rightResult;
    let result = Math.max(left.nodeResult + right.nodeResult, leftLeft + leftRight + rightLeft + rightRight + node.val);
    return new Result(result, left.nodeResult, right.nodeResult);
}

module.exports = rob;