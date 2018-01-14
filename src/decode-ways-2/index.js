/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function (s) {
    if (s.length === 0) {
        return 0;
    }
    // dp[i] is the number of ways of the first i characters
    let dp = new Array(s.length + 1);
    dp[0] = 1;
    dp[1] = s[0] === '0' ? 0 : (s[0] === '*' ? 9 : 1);
    for (let i = 2; i < dp.length; ++i) {
        dp[i] = 0;
        if (s[i - 1] === '*') {
            dp[i] += dp[i - 1] * 9;
            if (s[i - 2] === '1') {
                dp[i] += dp[i - 2] * 9;
            } else if (s[i - 2] === '2') {
                dp[i] += dp[i - 2] * 6;
            } else if (s[i - 2] === '*') {
                dp[i] += dp[i - 2] * 15;
            }
        } else {
            // then s[i-1] !== '*'
            if (s[i - 1] !== '0') {
                dp[i] += dp[i - 1];
            }
            if (s[i - 2] === '*') {
                if (s[i - 1] <= '6') {
                    dp[i] += dp[i - 2] * 2;
                } else {
                    dp[i] += dp[i - 2];
                }
            } else if (s[i - 2] === '1' || s[i - 2] === '2' && s[i - 1] <= '6') {
                dp[i] += dp[i - 2];
            }
        }
        dp[i] = dp[i] % (Math.pow(10, 9) + 7);
    }
    return dp[s.length];
};

module.exports = numDecodings;