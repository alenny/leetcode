/**
 * @param {number[]} nums
 * @return {string[]}
 */
const findRelativeRanks = function (nums) {
    let map = new Map();
    for (let i = 0; i < nums.length; ++i) {
        map.set(nums[i], i);
    }
    let ret = [];
    nums.sort((a, b) => b - a);
    if (nums.length > 0) {
        ret[map.get(nums[0])] = 'Gold Medal';
    }
    if (nums.length > 1) {
        ret[map.get(nums[1])] = 'Silver Medal';
    }
    if (nums.length > 2) {
        ret[map.get(nums[2])] = 'Bronze Medal';
    }
    for (let i = 3; i < nums.length; ++i) {
        ret[map.get(nums[i])] = (i + 1).toString();
    }
    return ret;
};

module.exports = findRelativeRanks;