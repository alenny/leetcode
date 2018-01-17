/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElement = function (findNums, nums) {
    let numsMap = new Map();
    for (let i = 0; i < nums.length; ++i) {
        numsMap.set(nums[i], i);
    }
    let ret = new Array(findNums.length);
    for (let i = 0; i < findNums.length; ++i) {
        let posInNums = numsMap.get(findNums[i]);
        ret[i] = -1;
        for (let j = posInNums + 1; j < nums.length; ++j) {
            if (nums[j] > findNums[i]) {
                ret[i] = nums[j];
                break;
            }
        }
    }
    return ret;
};

module.exports = nextGreaterElement;