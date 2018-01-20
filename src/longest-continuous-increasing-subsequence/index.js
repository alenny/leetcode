/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = function (nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return 1;
    }
    let maxLength = 1;
    let cur = 0;
    while (cur < nums.length - 1) {
        while (cur < nums.length - 1 && nums[cur] >= nums[cur + 1]) {
            ++cur;
        }
        if (cur > nums.length - 2) {
            break;
        }
        let increaseStart = cur;
        while (cur < nums.length - 1 && nums[cur] < nums[cur + 1]) {
            ++cur;
        }
        let length = cur - increaseStart + 1;
        if (length > maxLength) {
            maxLength = length;
        }
    }
    return maxLength;
};

module.exports = findLengthOfLCIS;