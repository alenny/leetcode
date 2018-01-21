/**
 * @param {number[]} nums
 * @return {number}
 */
const findLHS = function (nums) {
    if (nums.length <= 1) {
        return 0;
    }
    nums.sort((a, b) => b - a);
    let left = 0, cur = 0, maxLength = 0;
    while (cur < nums.length) {
        while (cur < nums.length && nums[cur] === nums[left]) {
            ++cur;
        }
        if (cur >= nums.length) {
            break;
        }
        let newLeft = cur;
        while (cur < nums.length && nums[cur] === nums[left] - 1) {
            ++cur;
        }
        if (cur > newLeft) {
            let len = cur - left;
            if (len > maxLength) {
                maxLength = len;
            }
        }
        left = newLeft;
    }
    return maxLength;
};

module.exports = findLHS;