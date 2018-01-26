/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
class Status {
    constructor(prevVal, prevCount, maxValues, maxCount) {
        this.prevVal = prevVal;
        this.prevCount = prevCount;
        this.maxValues = maxValues;
        this.maxCount = maxCount;
    }
}

const findMode = function (root) {
    // Algorithm: in-order traverse returns a sorted array, then we can easily count dup values
    let status = new Status(NaN, 0, [], 0);
    traverse(root, status);
    return status.maxValues;
};

function traverse(node, status) {
    if (!node) {
        return;
    }
    traverse(node.left, status);
    if (status.prevVal === node.val) {
        ++status.prevCount;
    } else {
        status.prevVal = node.val;
        status.prevCount = 1;
    }
    if (status.prevCount === status.maxCount) {
        status.maxValues.push(node.val);
    } else if (status.prevCount > status.maxCount) {
        status.maxValues = [node.val];
        status.maxCount = status.prevCount;
    }
    traverse(node.right, status);
}

module.exports = findMode;