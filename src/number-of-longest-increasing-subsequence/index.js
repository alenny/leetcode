/**
 * @param {number[]} nums
 * @return {number}
 */
const findNumberOfLIS = function (nums) {
    let maxLen = 0, maxCount = 0;
    // dp[count] is the number of longest increasing sub-sequences of the first count numbers, ending with nums[count-1]
    let dp = [];
    for (let count = 1; count <= nums.length; ++count) {
        dp[count] = { len: 1, count: 1 };
        for (let prevCount = count - 1; prevCount > 0; --prevCount) {
            if (nums[prevCount - 1] >= nums[count - 1]) {
                continue;
            }
            if (dp[prevCount].len + 1 > dp[count].len) {
                dp[count] = { len: dp[prevCount].len + 1, count: dp[prevCount].count };
            } else if (dp[prevCount].len + 1 === dp[count].len) {
                dp[count].count += dp[prevCount].count;
            }
        }
        if (dp[count].len > maxLen) {
            maxLen = dp[count].len;
            maxCount = dp[count].count;
        } else if (dp[count].len === maxLen) {
            maxCount += dp[count].count;
        }
    }
    return maxCount;
};

module.exports = findNumberOfLIS;