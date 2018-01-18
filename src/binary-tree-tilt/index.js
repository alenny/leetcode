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
    constructor(tiltSum, valSum) {
        this.tiltSum = tiltSum;
        this.valSum = valSum;
    }
}

const findTilt = function (root) {
    return traverse(root).tiltSum;
};

function traverse(node) {
    if (!node) {
        return new Status(0, 0);
    }
    let leftStatus = traverse(node.left);
    let rightStatus = traverse(node.right);
    return new Status(
        leftStatus.tiltSum + rightStatus.tiltSum + Math.abs(leftStatus.valSum - rightStatus.valSum),
        leftStatus.valSum + rightStatus.valSum + node.val);
}

module.exports = findTilt;