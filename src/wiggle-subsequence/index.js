/**
 * @param {number[]} nums
 * @return {number}
 */
const wiggleMaxLength = function (nums) {
    if (nums.length < 2) {
        return nums.length;
    }
    let wiggles = 0, idx = 1, direction = 0;
    while (idx < nums.length) {
        let diff = nums[idx] - nums[idx - 1];
        if (diff > 0) {
            if (direction < 0) {
                ++wiggles;
            }
            direction = diff;
        } else if (diff < 0) {
            if (direction > 0) {
                ++wiggles;
            }
            direction = diff;
        }
        ++idx;
    }
    return direction === 0 ? 1 : wiggles + 2;
};

module.exports = wiggleMaxLength;