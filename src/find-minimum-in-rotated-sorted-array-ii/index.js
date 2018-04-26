/**
 * @param {number[]} nums
 * @return {number}
 */
const findMin = function (nums) {
    let right = nums.length - 1;
    while (right > 0 && nums[right] === nums[0]) {
        --right;
    }
    // make sure begin and end are different
    return binarySearch(nums, 0, right);
};

function binarySearch(nums, begin, end) {
    if (begin === end || nums[begin] <= nums[end]) {
        return nums[begin];
    }
    let mid = begin + end >> 1;
    return nums[mid] >= nums[begin] ? binarySearch(nums, mid + 1, end) : binarySearch(nums, begin, mid);
}

module.exports = findMin;