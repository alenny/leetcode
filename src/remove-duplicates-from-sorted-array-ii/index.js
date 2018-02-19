/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
    let storeIdx = 2, scanIdx = 2;
    while (scanIdx < nums.length) {
        if (nums[storeIdx - 1] !== nums[scanIdx] || nums[storeIdx - 2] !== nums[scanIdx]) {
            nums[storeIdx++] = nums[scanIdx];
        }
        ++scanIdx;
    }
    return storeIdx;
};

module.exports = removeDuplicates;