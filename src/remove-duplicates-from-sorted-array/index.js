/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    if (!nums) {
        return 0;
    }
    if (nums.length <= 1) {
        return nums.length;
    }
    let scanIdx = 1, storeIdx = 1;
    while (scanIdx < nums.length) {
        while (scanIdx < nums.length && nums[scanIdx] === nums[scanIdx - 1]) {
            ++scanIdx;
        }
        if (scanIdx >= nums.length) {
            break;
        }
        nums[storeIdx++] = nums[scanIdx++];
    }
    return storeIdx;
};

module.exports = removeDuplicates;