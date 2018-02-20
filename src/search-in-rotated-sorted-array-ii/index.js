/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
const search = function (nums, target) {
    let newLength = removeDuplicate(nums);
    return searchHelper(nums, target, 0, newLength - 1);
};

function removeDuplicate(nums) {
    let storeIdx = 1, scanIdx = 1;
    while (scanIdx < nums.length) {
        if (nums[scanIdx] !== nums[storeIdx - 1]) {
            nums[storeIdx++] = nums[scanIdx];
        }
        ++scanIdx;
    }
    return storeIdx;
}

function searchHelper(nums, target, begin, end) {
    if (begin > end) {
        return false;
    }
    let mid = begin + end >> 1;
    let midVal = nums[mid];
    if (midVal === target) {
        return true;
    }
    if (target < midVal && target >= nums[begin] ||
        target < midVal && target < nums[begin] && midVal < nums[begin] ||
        target > midVal && target >= nums[begin] && midVal < nums[begin]) {
        return searchHelper(nums, target, begin, mid - 1);
    }
    return searchHelper(nums, target, mid + 1, end);
}

module.exports = search;