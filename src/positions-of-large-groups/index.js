/**
 * @param {string} S
 * @return {number[][]}
 */
const largeGroupPositions = function (S) {
    let idx = 0, ret = [];
    while (idx < S.length) {
        let start = idx++;
        while (idx < S.length && S[idx] === S[start]) {
            ++idx;
        }
        if (idx - start >= 3) {
            ret.push([start, idx - 1]);
        }
    }
    return ret;
};

module.exports = largeGroupPositions;