/**
 * @param {string} s
 * @return {number}
 */
const minCut = function (s) {
    let pdRanges = getAllPalindromeRanges(s);
    return minCutHelper(pdRanges, 0, new Map());
};

function minCutHelper(pdRanges, begin, cache) {
    if (pdRanges[begin].has(pdRanges.length - 1)) {
        return 0;
    }
    if (cache.has(begin)) {
        return cache.get(begin);
    }
    let min = Number.POSITIVE_INFINITY;
    for (let currCutPos of pdRanges[begin].keys()) {
        let cuts = 1 + minCutHelper(pdRanges, currCutPos + 1, cache);
        min = Math.min(min, cuts);
    }
    cache.set(begin, min);
    return min;
}

function getAllPalindromeRanges(s) {
    let pdRanges = new Array(s.length);
    for (let i = 0; i < s.length; ++i) {
        pdRanges[i] = new Set();
    }
    for (let i = 0; i < s.length; ++i) {
        let left = i, right = i;
        while (left >= 0 && right < s.length) {
            if (s[left] !== s[right]) {
                break;
            }
            pdRanges[left--].add(right++);
        }
        left = i, right = i + 1;
        while (left >= 0 && right < s.length) {
            if (s[left] !== s[right]) {
                break;
            }
            pdRanges[left--].add(right++);
        }
    }
    return pdRanges;
}

module.exports = minCut;