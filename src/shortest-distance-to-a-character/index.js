/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
const shortestToChar = function (S, C) {
    let idx = 0;
    let ret = new Array(S.length);
    let lastDist = Number.POSITIVE_INFINITY;
    while (idx < S.length) {
        let start = idx;
        while (idx < S.length && S[idx] !== C) {
            ret[idx] = lastDist++;
            ++idx;
        }
        if (idx === S.length) {
            break;
        }
        ret[idx] = 0;
        let backIdx = idx - 1, dist = 1;
        while (backIdx >= 0 && dist < ret[backIdx]) {
            ret[backIdx--] = dist++;
        }
        ++idx;
        lastDist = 1;
    }
    return ret;
};

module.exports = shortestToChar;