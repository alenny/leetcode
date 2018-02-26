/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */
const isInterleaveBackTracking = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }
    return helper(s1, 0, s2, 0, s3, 0);
};

function helper(s1, i1, s2, i2, s3, i3) {
    return i1 === s1.length && i2 === s2.length ||
        i1 < s1.length && s3[i3] === s1[i1] && helper(s1, i1 + 1, s2, i2, s3, i3 + 1) ||
        i2 < s2.length && s3[i3] === s2[i2] && helper(s1, i1, s2, i2 + 1, s3, i3 + 1);
}

const isInterleave = function (s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false;
    }
    // dp[i][j] stores if the first i characters of s1 and the first j characters of s2 can interleave to the first i+j characters of s3
    let dp = new Array(s1.length + 1);
    for (let i = 0; i <= s1.length; ++i) {
        dp[i] = new Array(s2.length + 1);
    }
    dp[0][0] = true;
    for (let j = 1; j <= s2.length; ++j) {
        dp[0][j] = dp[0][j - 1] && s2[j - 1] === s3[j - 1];
    }
    for (let i = 1; i <= s1.length; ++i) {
        dp[i][0] = dp[i - 1][0] && s1[i - 1] === s3[i - 1];
    }
    for (let i = 1; i <= s1.length; ++i) {
        for (let j = 1; j <= s2.length; ++j) {
            dp[i][j] = dp[i - 1][j] && s1[i - 1] === s3[i - 1 + j] || dp[i][j - 1] && s2[j - 1] === s3[j - 1 + i];
        }
    }
    return dp[s1.length][s2.length];
};

module.exports = isInterleave;