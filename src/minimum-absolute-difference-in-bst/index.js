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
class Status {
    constructor(min, max, minDiff) {
        this.min = min;
        this.max = max;
        this.minDiff = minDiff;
    }
}

const getMinimumDifference = function (root) {
    return traverse(root).minDiff;
};

function traverse(node) {
    if (!node) {
        return new Status(Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
    }
    let leftStatus = traverse(node.left);
    let rightStatus = traverse(node.right);
    return new Status(
        Math.min(leftStatus.min, node.val),
        Math.max(rightStatus.max, node.val),
        Math.min(Math.abs(node.val - leftStatus.max), Math.abs(node.val - rightStatus.min), leftStatus.minDiff, rightStatus.minDiff)
    );
}

module.exports = getMinimumDifference;