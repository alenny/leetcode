/**
 * @param {string} s
 * @return {number}
 */
const strangePrinter = function (s) {
    let cache = [];
    for (let i = 0; i < s.length; ++i) {
        cache[i] = [];
    }
    return printHelper(s, 0, s.length - 1, 0, cache);
};

function printHelper(s, begin, end, firstLetterPrinted, cache) {
    if (begin > end) {
        return 0;
    }
    if (cache[begin][end] !== undefined) {
        return cache[begin][end] - firstLetterPrinted;
    }
    while (begin < end && s[begin + 1] === s[begin]) {
        ++begin;
    }
    let minSteps = 1 - firstLetterPrinted + printHelper(s, begin + 1, end, 0, cache);
    for (let m = begin + 1; m <= end; ++m) {
        if (s[m] === s[begin]) {
            minSteps = Math.min(minSteps, 1 - firstLetterPrinted + printHelper(s, begin + 1, m - 1, 0, cache) + printHelper(s, m, end, 1, cache));
        }
    }
    cache[begin][end] = minSteps + firstLetterPrinted;
    return minSteps;
}

module.exports = strangePrinter;