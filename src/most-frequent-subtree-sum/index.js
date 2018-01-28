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
var findFrequentTreeSum = function (root) {
    if (!root) {
        return [];
    }
    let sumMap = new Map();
    traverse(root, sumMap);
    let maxFreq = Number.NEGATIVE_INFINITY;
    let sums = [];
    for (let pair of sumMap) {
        if (pair[1] === maxFreq) {
            sums.push(pair[0]);
        } else if (pair[1] > maxFreq) {
            maxFreq = pair[1];
            sums = [pair[0]];
        }
    }
    return sums;
};

function traverse(node, sumMap) {
    let sum = node.val;
    if (node.left) {
        sum += traverse(node.left, sumMap);
    }
    if (node.right) {
        sum += traverse(node.right, sumMap);
    }
    addSum(sum, sumMap);
    return sum;
}

function addSum(sum, sumMap) {
    let count = sumMap.get(sum);
    sumMap.set(sum, count ? count + 1 : 1);
}

module.exports = findFrequentTreeSum;