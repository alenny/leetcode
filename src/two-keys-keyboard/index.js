/**
 * @param {number} n
 * @return {number}
 */
const minSteps = function (n) {
    let dp = [];
    dp[1] = 0;
    for (let i = 2; i <= n; ++i) {
        dp[i] = i;
        if ((i & 1) === 0) {
            dp[i] = Math.min(dp[i >> 1] + 2, dp[i]);
        } else {
            for (let j = Math.floor(Math.sqrt(i)); j >= 3; --j) {
                if (i % j === 0) {
                    dp[i] = Math.min(dp[j] + dp[i / j], dp[i]);
                    break;
                }
            }
        }
    }
    return dp[n];
};

module.exports = minSteps;