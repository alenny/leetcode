/**
 * @param {string} text - the whole text
 * @param {string} pattern - the match pattern
 * @param {string} onlyFirst - true to return only the first match; false to return all matched
 * @return {number[]} - indexes of matches
 */
const kmp = function (text, pattern, onlyFirst) {
    let lps = getLongestPrefixes(pattern);
    let ti = 0, pi = 0;
    let ret = [];
    while (ti < text.length) {
        while (pi < pattern.length && ti < text.length && text[ti] === pattern[pi]) {
            ++ti;
            ++pi;
        }
        if (pi === pattern.length) {
            ret.push(ti - pi);
            if (onlyFirst) {
                return ret;
            }
        }
        if (pi === 0) {
            ++ti;
        } else {
            pi = lps[pi - 1];
        }
    }
    return ret;
};

function getLongestPrefixes(pattern) {
    // pattern's self kmp
    let lps = new Array(pattern.length);
    lps[0] = 0;
    // use len to trace the matched prefix's length
    let len = 0, i = 1;
    while (i < pattern.length) {
        if (pattern[len] === pattern[i]) {
            lps[i++] = ++len;
            continue;
        }
        if (len === 0) {
            lps[i++] = 0;
            continue;
        }
        len = lps[len - 1];
    }
    return lps;
}

module.exports = kmp;