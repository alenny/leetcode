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
const averageOfLevels = function (root) {
    if (!root) {
        return [];
    }
    let result = [];
    averageHelper([root], result);
    return result;
};

function averageHelper(nodesOneLevel, result) {
    if (nodesOneLevel.length === 0) {
        return;
    }
    let nodesNextLevel = [];
    let sum = 0;
    for (let node of nodesOneLevel) {
        sum += node.val;
        if (node.left) {
            nodesNextLevel.push(node.left);
        }
        if (node.right) {
            nodesNextLevel.push(node.right);
        }
    }
    result.push(sum / nodesOneLevel.length);
    averageHelper(nodesNextLevel, result);
}

module.exports = averageOfLevels;