/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = function (nums) {
    let zeroCount = 0;
    for (let i = 0; i < nums.length; ++i) {
        const curr = nums[i];
        if (curr === 0) {
            ++zeroCount;
        } else if (zeroCount > 0) {
            nums[i - zeroCount] = nums[i];
        }
    }
    for (let i = nums.length - zeroCount; i < nums.length; ++i) {
        nums[i] = 0;
    }
};

module.exports = moveZeroes;