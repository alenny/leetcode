/**
 * @param {number[]} nums
 * @return {boolean}
 */
const checkPossibility = function (nums) {
    if (nums.length < 2) {
        return true;
    }
    let i = 0;
    let modified = false;
    while (i < nums.length - 1) {
        if (nums[i] > nums[i + 1]) {
            if (modified || i > 0 && i < nums.length - 2 && nums[i - 1] > nums[i + 1] && nums[i] > nums[i + 2]) {
                return false;
            }
            modified = true;
        }
        ++i;
    }
    return true;
};

module.exports = checkPossibility;