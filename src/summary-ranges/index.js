/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
    let ret = [];
    let i = 0;
    while (i < nums.length) {
        let begin = i;
        while (i < nums.length - 1 && nums[i + 1] === nums[i] + 1) {
            ++i;
        }
        if (begin === i) {
            ret.push(nums[i].toString());
        } else {
            ret.push(nums[begin] + '->' + nums[i]);
        }
        ++i;
    }
    return ret;
};

module.exports = summaryRanges;