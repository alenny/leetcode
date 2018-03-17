/**
 * @param {number[]} nums
 * @return {number[]}
 */
const largestDivisibleSubset = function (nums) {
    if (nums.length === 0) {
        return [];
    }
    nums.sort((a, b) => a - b);
    let subsets = new Map();
    let longestSubset = [nums[0]];
    subsets.set(nums[0], [nums[0]]);
    for (let i = 1; i < nums.length; ++i) {
        let set = [];
        for (let j = 1; j <= Math.min(nums[i - 1], Math.sqrt(nums[i])); ++j) {
            if (nums[i] % j !== 0) {
                continue;
            }
            for (let factor of [j, nums[i] / j]) {
                let prevSet = subsets.get(factor);
                if (!prevSet) {
                    continue;
                }
                if (prevSet.length > set.length) {
                    set = prevSet;
                }
            }
        }
        set = set.slice();
        set.push(nums[i]);
        subsets.set(nums[i], set);
        if (set.length > longestSubset.length) {
            longestSubset = set;
        }
    }
    return longestSubset;
};

module.exports = largestDivisibleSubset;