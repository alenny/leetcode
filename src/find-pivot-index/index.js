/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = function (nums) {
    if (!nums || nums.length === 0) {
        return -1;
    }
    let sums = new Array(nums.length);
    let sum = 0;
    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
        sums[i] = sum;
    }
    for (let i = 0; i < nums.length; ++i) {
        if (sums[i] - nums[i] === sum - sums[i]) {
            return i;
        }
    }
    return -1;
};

module.exports = pivotIndex;