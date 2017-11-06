/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */

function pathSumUp(node, sum, ancestorValues, parentIndex) {
    if (!node) {
        return 0;
    }
    let total = node.val;
    let pathCount = total === sum ? 1 : 0;
    for (let i = parentIndex; i >= 0; --i) {
        total += ancestorValues[i];
        if (total === sum) {
            ++pathCount;
        }
    }
    return pathCount;
}

function pathSumHere(node, sum, ancestorValues, parentIndex) {
    if (!node) {
        return 0;
    }
    let nodeIndex = parentIndex + 1;
    ancestorValues[nodeIndex] = node.val;
    return pathSumHere(node.left, sum, ancestorValues, nodeIndex) +
        pathSumHere(node.right, sum, ancestorValues, nodeIndex) +
        pathSumUp(node, sum, ancestorValues, parentIndex);
}

const pathSum = function (root, sum) {
    let ancestorValues = [];
    return pathSumHere(root, sum, ancestorValues, -1);
};

module.exports = pathSum;