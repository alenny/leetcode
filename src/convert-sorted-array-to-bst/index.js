/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
const sortedArrayToBST = function (nums) {
    return internalFunc(nums, 0, nums.length);
};

const TreeNode = require('./tree-node');
const internalFunc = function (nums, begin, length) {
    if (length === 0) {
        return null;
    }
    const rootIndex = begin + (length >>> 1);
    const root = new TreeNode(nums[rootIndex]);
    root.left = internalFunc(nums, begin, rootIndex - begin);
    root.right = internalFunc(nums, rootIndex + 1, begin + length - rootIndex - 1);
    return root;
};

module.exports = sortedArrayToBST;