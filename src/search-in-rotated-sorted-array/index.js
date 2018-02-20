/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
    return searchHelper(nums, target, 0, nums.length - 1);
};

function searchHelper(nums, target, begin, end) {
    if (begin > end) {
        return -1;
    }
    let mid = begin + end >> 1;
    let midVal = nums[mid];
    if (midVal === target) {
        return mid;
    }
    if (target < midVal && target >= nums[begin] ||
        target < midVal && target < nums[begin] && midVal < nums[begin] ||
        target > midVal && target >= nums[begin] && midVal < nums[begin]) {
        return searchHelper(nums, target, begin, mid - 1);
    }
    return searchHelper(nums, target, mid + 1, end);
}

module.exports = search;