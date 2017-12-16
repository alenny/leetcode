/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
const wordBreak = function (s, wordDict) {
    let dict = new Set();
    for (let w of wordDict) {
        dict.add(w);
    }
    // dp[i] stores true if the first i characters of s can do word break; otherwise, stores false
    let dp = new Array(s.length + 1);
    dp.fill(false);
    dp[0] = true;
    for (let i = 1; i <= s.length; ++i) {
        for (j = 0; j < i; ++j) {
            if (dp[j] && dict.has(s.substring(j, i))) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[s.length];
};

module.exports = wordBreak; 