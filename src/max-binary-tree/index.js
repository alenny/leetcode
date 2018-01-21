/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
const TreeNode = require('../_utils/tree-node');

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    return constructHelper(nums, 0, nums.length - 1);
};

function constructHelper(nums, left, right) {
    if (left > right) {
        return null;
    }
    let maxIdx = left;
    for (let i = left + 1; i <= right; ++i) {
        if (nums[i] > nums[maxIdx]) {
            maxIdx = i;
        }
    }
    let node = new TreeNode(nums[maxIdx]);
    node.left = constructHelper(nums, left, maxIdx - 1);
    node.right = constructHelper(nums, maxIdx + 1, right);
    return node;
}

module.exports = constructMaximumBinaryTree;