/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findErrorNums = function (nums) {
    let i = 0;
    let ret = [];
    while (i < nums.length) {
        if (nums[i] === i + 1 || nums[i] === -1) {
            ++i;
        } else if (nums[i] === nums[nums[i] - 1]) {
            ret[0] = nums[i];
            nums[i] = -1;
            ++i;
        } else {
            let temp = nums[nums[i] - 1];
            nums[nums[i] - 1] = nums[i];
            nums[i] = temp;
        }
    }
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === -1) {
            ret[1] = i + 1;
            break;
        }
    }
    return ret;
};

module.exports = findErrorNums;