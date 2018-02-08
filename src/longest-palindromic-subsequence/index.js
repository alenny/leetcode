/**
 * @param {string} s
 * @return {number}
 */
const longestPalindromeSubseq = function (s) {
    if (s.length === 0) {
        return 0;
    }
    let dp = [];
    for (let i = 0; i < s.length; ++i) {
        dp[i] = new Array(s.length);
        dp[i].fill(0);
        dp[i][i] = 1;
    }
    let longest = 1;
    for (let i = 0; i < s.length - 1; ++i) {
        let j = i + 1;
        dp[i][j] = s[i] === s[j] ? 2 : 1;
        if (dp[i][j] > longest) {
            longest = dp[i][j];
        }
    }
    for (let dist = 2; dist < s.length; ++dist) {
        for (let i = 0; i < s.length - dist; ++i) {
            let j = i + dist;
            dp[i][j] = s[i] === s[j] ? dp[i + 1][j - 1] + 2 : Math.max(dp[i][j - 1], dp[i + 1][j]);
            if (dp[i][j] > longest) {
                longest = dp[i][j];
            }
        }
    }
    return longest;
};

module.exports = longestPalindromeSubseq;