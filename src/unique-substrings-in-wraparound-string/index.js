/**
 * @param {string} p
 * @return {number}
 */
const findSubstringInWraproundString = function (p) {
    const A_CODE = 'a'.charCodeAt(0);
    let idx = 0, maxLengths = new Array(26);
    maxLengths.fill(0);
    while (idx < p.length) {
        let start = idx++;
        let charIdx = p.charCodeAt(start) - A_CODE;
        maxLengths[charIdx] = Math.max(maxLengths[charIdx], 1);
        while (idx < p.length && (p[idx] === 'a' && p[idx - 1] === 'z' || p.charCodeAt(idx) - p.charCodeAt(idx - 1) === 1)) {
            charIdx = p.charCodeAt(idx++) - A_CODE;
            maxLengths[charIdx] = Math.max(maxLengths[charIdx], idx - start);
        }
    }
    let ret = 0;
    for (let length of maxLengths) {
        ret += length;
    }
    return ret;
};

module.exports = findSubstringInWraproundString;