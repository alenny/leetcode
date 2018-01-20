/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
    if (cost.length === 0) {
        return 0;
    }
    if (cost.length === 1) {
        return cost[0];
    }
    // dp[i] is the cost to go to next target from via step i
    let dp = new Array(cost.length);
    dp[0] = cost[0];
    dp[1] = cost[1];
    for (let i = 2; i < cost.length; ++i) {
        dp[i] = Math.min(cost[i] + dp[i - 1], cost[i] + dp[i - 2]);
    }
    return Math.min(dp[cost.length - 2], dp[cost.length - 1]);
};

module.exports = minCostClimbingStairs;