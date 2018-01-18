/**
 * @param {string} s
 * @return {number}
 */
const countBinarySubstrings = function (s) {
    if (s.length < 2) {
        return 0;
    }
    let count = 0;
    let idx = 0;
    let preSameCount = 0;
    while (idx < s.length) {
        let sameStart = idx;
        while (idx < s.length - 1 && s[idx] == s[idx + 1]) {
            ++idx;
        }
        let sameCount = idx - sameStart + 1;
        if (preSameCount > 0) {
            count += Math.min(preSameCount, sameCount);
        }
        preSameCount = sameCount;
        ++idx;
    }
    return count;
};

module.exports = countBinarySubstrings;