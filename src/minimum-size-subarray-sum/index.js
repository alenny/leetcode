/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
const minSubArrayLen = function (s, nums) {
    let left = 0, right = 0, sum = 0, minLen = 0;
    while (right < nums.length) {
        while (right < nums.length && sum < s) {
            sum += nums[right++];
        }
        if (sum < s) {
            return minLen;
        }
        while (left < right && sum >= s) {
            let len = right - left;
            if (minLen === 0 || len < minLen) {
                minLen = len;
            }
            sum -= nums[left++];
        }
    }
    return minLen;
};

module.exports = minSubArrayLen;