/**
 * @param {string} s
 * @return {number}
 */
const longestValidParentheses = function (s) {
    // dp[i] stores the longest result length of the first i characters ending with the (i-1)th character.
    let dp = new Array(s.length + 1);
    dp[0] = dp[1] = 0;
    let longest = 0;
    for (let i = 2; i <= s.length; ++i) {
        let si = i - 1;
        if (s[si] === '(') {
            dp[i] = 0;
        } else {
            // case#1: <valid>(<valid>)
            let tmpIdx = si - dp[i - 1] - 1;
            dp[i] = s[tmpIdx] === '(' ? dp[tmpIdx] + dp[i - 1] + 2 : 0;
            // case#2: <valid>()
            if (s[si - 1] === '(') {
                dp[i] = Math.max(dp[i - 2] + 2, dp[i]);
            }
            longest = Math.max(longest, dp[i]);
        }
    }
    return longest;
};

module.exports = longestValidParentheses;