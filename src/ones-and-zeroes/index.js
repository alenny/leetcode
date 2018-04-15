/**
 * @param {string[]} strs
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const findMaxForm3D = function (strs, m, n) {
    // dp[si][mi][ni] is the max combination of the first si strs using mi 0s and ni 1s
    let dp = new Array(strs.length + 1);
    for (let si = 0; si <= strs.length; ++si) {
        dp[si] = new Array(m + 1);
        for (let mi = 0; mi <= m; ++mi) {
            dp[si][mi] = new Array(n + 1);
            dp[si][mi].fill(0);
        }
    }
    for (let si = 1; si <= strs.length; ++si) {
        for (let mi = 0; mi <= m; ++mi) {
            for (let ni = 0; ni <= n; ++ni) {
                dp[si][mi][ni] = dp[si - 1][mi][ni];
            }
        }
        let count = count01(strs[si - 1]);
        for (let mi = count[0]; mi <= m; ++mi) {
            for (let ni = count[1]; ni <= n; ++ni) {
                dp[si][mi][ni] = Math.max(dp[si][mi][ni], 1 + dp[si - 1][mi - count[0]][ni - count[1]]);
            }
        }
    }
    return dp[strs.length][m][n];
};

function count01(str) {
    let ret = [0, 0];
    for (let ch of str) {
        if (ch === '0') {
            ++ret[0];
        } else {
            ++ret[1];
        }
    }
    return ret;
}

const findMaxForm = function (strs, m, n) {
    let dp = new Array(m + 1);
    for (let mi = 0; mi <= m; ++mi) {
        dp[mi] = new Array(n + 1);
        dp[mi].fill(0);
    }
    for (let str of strs) {
        let count = count01(str);
        for (let mi = m; mi >= count[0]; --mi) {
            for (let ni = n; ni >= count[1]; --ni) {
                dp[mi][ni] = Math.max(dp[mi][ni], 1 + dp[mi - count[0]][ni - count[1]]);
            }
        }
    }
    return dp[m][n];
};

module.exports = findMaxForm;