/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    let fromFirst = [nums[0], Math.max(nums[0], nums[1])];
    if (nums.length === 2) {
        return fromFirst[1];
    }
    for (let i = 2; i < nums.length - 1; ++i) {
        fromFirst[i] = Math.max(fromFirst[i - 1], fromFirst[i - 2] + nums[i]);
    }
    let fromSecond = [0, nums[1], Math.max(nums[1], nums[2])];
    for (let i = 3; i < nums.length; ++i) {
        fromSecond[i] = Math.max(fromSecond[i - 1], fromSecond[i - 2] + nums[i]);
    }
    return Math.max(fromFirst[nums.length - 2], fromSecond[nums.length - 1]);
};

module.exports = rob;