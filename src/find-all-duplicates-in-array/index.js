/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDuplicates = function (nums) {
    let ret = [];
    let i = 0;
    while (i < nums.length) {
        if (nums[i] === 0 || nums[i] === -1) {
            ++i;
            continue;
        }
        let targetIdx = nums[i] - 1;
        if (i === targetIdx) {
            nums[i] = 0;
            ++i;
            continue;
        }
        if (nums[targetIdx] === 0 || nums[targetIdx] === nums[i]) {
            ret.push(nums[i]);
            nums[targetIdx] = 0;
            nums[i] = -1;
            ++i;
            continue;
        }
        nums[i] = nums[targetIdx];
        nums[targetIdx] = 0;
    }
    return ret;
};

module.exports = findDuplicates;