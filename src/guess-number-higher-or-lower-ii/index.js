/**
 * @param {number} n
 * @return {number}
 */
const getMoneyAmount = function (n) {
    // dp[r][c] is the min money to guess from r to c
    let dp = new Array(n + 1);
    for (let r = 1; r <= n; ++r) {
        dp[r] = new Array(n + 1);
        dp[r][r] = 0;
    }
    for (let dist = 1; dist < n; ++dist) {
        for (let r = 1; r <= n - dist; ++r) {
            let c = r + dist;
            dp[r][c] = Math.min(r + dp[r + 1][c], dp[r][c - 1] + c);
            for (let mid = r + 1; mid < c; ++mid) {
                dp[r][c] = Math.min(dp[r][c], Math.max(mid + dp[r][mid - 1], mid + dp[mid + 1][c]));
            }
        }
    }
    return dp[1][n];
};

module.exports = getMoneyAmount;