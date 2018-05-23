/**
 * @param {number} N
 * @param {number} K
 * @param {number} W
 * @return {number}
 */
const new21Game = function (N, K, W) {
    if (K === 0 || N >= K - 1 + W) {
        return 1;
    }
    // dp[i] is the probability of getting i point
    let dp = new Array(N + 1);
    dp[0] = 1;  // dp[0]=1 is meaningless, it is just for easy computation
    let dpSum = dp[0], prob = 0;
    for (let point = 1; point <= N; ++point) {
        dp[point] = dpSum / W;  // Each previous point probability multiple 1/W is the probability of the current point added from the previous point
        if (point < K) {
            dpSum += dp[point];
        } else {
            prob += dp[point];
        }
        if (point >= W) {
            dpSum -= dp[point - W];   // When adding a number between [1,W], previous points need to be big enough
        }
    }
    return prob;
};

module.exports = new21Game;