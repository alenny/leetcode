/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
const numDistinct2D = function (s, t) {
    // dp[ti][si] stores the solution count when we use s.substring(0,si) to form t.substring(0,ti);
    let dp = new Array(t.length + 1);
    for (let ti = 0; ti <= t.length; ++ti) {
        dp[ti] = new Array(s.length + 1);
        dp[ti].fill(0);
    }
    dp[0].fill(1);
    for (let ti = 1; ti <= t.length; ++ti) {
        for (let si = ti; si <= s.length; ++si) {
            dp[ti][si] = dp[ti][si - 1];
            if (s[si - 1] === t[ti - 1]) {
                dp[ti][si] += dp[ti - 1][si - 1];
            }
        }
    }
    return dp[t.length][s.length];
};

const numDistinct = function (s, t) {
    let prevDp = new Array(s.length + 1);
    prevDp.fill(1);
    for (let ti = 1; ti <= t.length; ++ti) {
        let dp = new Array(s.length + 1);
        dp.fill(0);
        for (let si = ti; si <= s.length; ++si) {
            dp[si] = dp[si - 1];
            if (s[si - 1] === t[ti - 1]) {
                dp[si] += prevDp[si - 1];
            }
        }
        prevDp = dp;
    }
    return prevDp[s.length];
};

module.exports = numDistinct;