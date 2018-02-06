/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isSubsequence = function (s, t) {
    let si = 0, ti = 0;
    while (si < s.length && ti < t.length) {
        if (s[si] === t[ti]) {
            ++si;
        }
        ++ti;
    }
    return si >= s.length;
};

module.exports = isSubsequence;