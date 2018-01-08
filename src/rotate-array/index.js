/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = function (nums, k) {
    let temp = [];
    k = k % nums.length;
    for (let i = nums.length - k; i < nums.length; ++i) {
        temp.push(nums[i]);
    }
    for (let i = nums.length - k - 1; i >= 0; --i) {
        nums[i + k] = nums[i];
    }
    for (let i = 0; i < k; ++i) {
        nums[i] = temp[i];
    }
};

module.exports = rotate;