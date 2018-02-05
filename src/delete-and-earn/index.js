/**
 * @param {number[]} nums
 * @return {number}
 */
const deleteAndEarn = function (nums) {
    if (nums.length === 0) {
        return 0;
    }
    if (nums.length === 1) {
        return nums[0];
    }
    let countMap = new Map();
    for (let num of nums) {
        let count = countMap.get(num);
        countMap.set(num, count ? count + 1 : 1);
    }
    let distinctNums = Array.from(countMap.keys());
    distinctNums.sort((a, b) => b - a);
    // dp[i] stores the max points of the first i distinctNumbers which include distinctNums[i-1]
    let dp = [];
    dp[0] = 0;
    dp[1] = distinctNums[0] * countMap.get(distinctNums[0]);
    for (let i = 2; i <= distinctNums.length; ++i) {
        let currSum = distinctNums[i - 1] * countMap.get(distinctNums[i - 1]);
        dp[i] = i > 2 ? Math.max(dp[i - 3], dp[i - 2]) + currSum : dp[i - 2] + currSum;
        if (distinctNums[i - 2] - distinctNums[i - 1] > 1) {
            dp[i] = Math.max(dp[i], dp[i - 1] + currSum);
        }
    }
    return Math.max(dp[distinctNums.length], dp[distinctNums.length - 1]);
};

module.exports = deleteAndEarn;