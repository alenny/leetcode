/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumProduct = function (nums) {
    if (nums.length < 4) {
        return nums[0] * nums[1] * nums[2];
    }
    nums.sort((a, b) => a - b);
    return Math.max(
        nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3],
        nums[0] * nums[1] * nums[nums.length - 1]);
};

module.exports = maximumProduct;