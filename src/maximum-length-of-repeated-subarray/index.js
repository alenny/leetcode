/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
const findLength = function (A, B) {
    let dp = new Array(A.length + 1);
    let longest = 0;
    for (let a = 0; a <= A.length; ++a) {
        dp[a] = new Array(B.length + 1);
    }
    dp[0].fill(0);
    for (let a = 1; a <= A.length; ++a) {
        dp[a][0] = 0;
        for (let b = 1; b <= B.length; ++b) {
            dp[a][b] = A[a - 1] === B[b - 1] ? dp[a - 1][b - 1] + 1 : 0;
            longest = Math.max(longest, dp[a][b]);
        }
    }
    return longest;
};

module.exports = findLength;