/**
 * @param {number[]} nums
 * @return {number}
 */
const lengthOfLIS = function (nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    // dp[i] stores the longest increasing subsequence ending with nums[i]
    let dp = new Array(nums.length);
    dp[0] = 1;
    for (let curr = 1; curr < nums.length; ++curr) {
        let longestEndsCurr = 1;
        for (let prev = 0; prev < curr; ++prev) {
            if (nums[curr] > nums[prev] && dp[prev] + 1 > longestEndsCurr) {
                longestEndsCurr = dp[prev] + 1;
            }
        }
        dp[curr] = longestEndsCurr;
    }
    return Math.max(...dp);
};

module.exports = lengthOfLIS;