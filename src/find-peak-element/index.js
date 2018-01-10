/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function (nums) {
    if (nums.length === 1) {
        return 0;
    }
    if (nums[0] > nums[1]) {
        return 0;
    }
    let i = 1;
    while (i < nums.length - 1) {
        if (nums[i] > nums[i - 1] && nums[i] > nums[i + 1]) {
            return i;
        }
        ++i;
    }
    if (nums[nums.length - 1] > nums[nums.length - 2]) {
        return nums.length - 1;
    }
    return -1;
};

module.exports = findPeakElement;