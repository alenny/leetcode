/**
 * @param {number} N
 * @return {number}
 */
const numTilings = function (N) {
    let dp = [0, 1, 2];
    const DIV = Math.pow(10, 9) + 7;
    for (let n = 3; n <= N; ++n) {
        dp[n] = 2;
        for (let bottom = 1; bottom <= 2; ++bottom) {
            dp[n] = (dp[n] + dp[n - bottom]) % DIV;
        }
        for (let bottom = 3; bottom < n; ++bottom) {
            dp[n] = (dp[n] + dp[n - bottom] * 2) % DIV;
        }
    }
    return dp[N];
};

module.exports = numTilings;

