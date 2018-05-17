/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const kInversePairs = function (n, k) {
    const MOD_FACTOR = Math.pow(10, 9) + 7;
    // f(n,k) = f(n-1,k) + f(n-1,k-1) + ... + f(n-1,Math.max(0,k-(n-1)))
    let dp = new Array(k + 1);
    dp.fill(0);
    dp[0] = 1;
    for (let currN = 2; currN <= n; ++currN) {
        let nextDp = new Array(k + 1);
        nextDp.fill(0);
        nextDp[0] = 1;
        for (let currK = 1; currK <= Math.min(k, currN * (currN - 1) / 2); ++currK) {
            nextDp[currK] = (dp[currK] + nextDp[currK - 1]) % MOD_FACTOR;
            if (currK >= currN) {
                nextDp[currK] = (nextDp[currK] + MOD_FACTOR - dp[currK - currN]) % MOD_FACTOR;
            }
        }
        dp = nextDp;
    }
    return dp[k];
};

module.exports = kInversePairs;