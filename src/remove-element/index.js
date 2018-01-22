/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
    let i = 0, end = nums.length - 1;
    while (i <= end) {
        if (nums[i] !== val) {
            ++i;
            continue;
        }
        [nums[i], nums[end]] = [nums[end], nums[i]];
        --end;
    }
    return end + 1;
};

module.exports = removeElement;