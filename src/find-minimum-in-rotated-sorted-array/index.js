/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
    return findMinHelper(nums, 0, nums.length - 1);
};

function findMinHelper(nums, begin, end) {
    if (begin === end || nums[begin] < nums[end]) {
        return nums[begin];
    }
    let mid = begin + end >> 1;
    return nums[mid] < nums[end] ? findMinHelper(nums, begin, mid) : findMinHelper(nums, mid + 1, end);
}

module.exports = findMin;