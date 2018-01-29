/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
const minimumDeleteSum2D = function (s1, s2) {
    // dp[i][j] means the min deleted sum to make s1.substring(0,i) and s2.substring(0,j) equal
    let dp = new Array(s1.length + 1);
    for (let i = 0; i < dp.length; ++i) {
        dp[i] = new Array(s2.length + 1);
    }
    dp[0][0] = 0;
    for (let i = 1; i < dp.length; ++i) {
        dp[i][0] = dp[i - 1][0] + s1.charCodeAt(i - 1);
    }
    for (let j = 1; j < dp[0].length; ++j) {
        dp[0][j] = dp[0][j - 1] + s2.charCodeAt(j - 1);
    }
    for (let i = 1; i < dp.length; ++i) {
        for (let j = 1; j < dp[0].length; ++j) {
            let currCharDeleteSum = s1[i - 1] === s2[j - 1] ? 0 : s1.charCodeAt(i - 1) + s2.charCodeAt(j - 1);
            dp[i][j] = Math.min(dp[i - 1][j] + s1.charCodeAt(i - 1), dp[i][j - 1] + s2.charCodeAt(j - 1), dp[i - 1][j - 1] + currCharDeleteSum);
        }
    }
    return dp[s1.length][s2.length];
};

const minimumDeleteSum = function (s1, s2) {
    let dp = new Array(s2.length + 1);
    dp[0] = 0;
    for (let j = 1; j < dp.length; ++j) {
        dp[j] = dp[j - 1] + s2.charCodeAt(j - 1);
    }
    for (let i = 1; i <= s1.length; ++i) {
        let prevDpJMinusOne = dp[0];
        dp[0] += s1.charCodeAt(i - 1);
        for (let j = 1; j <= s2.length; ++j) {
            let currCharDeleteSum = s1[i - 1] === s2[j - 1] ? 0 : s1.charCodeAt(i - 1) + s2.charCodeAt(j - 1);
            let prevDpJ = dp[j];
            dp[j] = Math.min(prevDpJ + s1.charCodeAt(i - 1), dp[j - 1] + s2.charCodeAt(j - 1), prevDpJMinusOne + currCharDeleteSum);
            prevDpJMinusOne = prevDpJ;
        }
    }
    return dp[s2.length];
};

module.exports = minimumDeleteSum;