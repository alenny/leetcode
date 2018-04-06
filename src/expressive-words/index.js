/**
 * @param {string} S
 * @param {string[]} words
 * @return {number}
 */
const expressiveWords = function (S, words) {
    let matchedCount = 0;
    let chars = [], charCounts = [], idx = 0;
    while (idx < S.length) {
        let begin = idx, char = S[idx];
        while (idx < S.length && S[idx] === char) {
            ++idx;
        }
        chars.push(char);
        charCounts.push(idx - begin);
    }
    for (let word of words) {
        let si = 0, wi = 0;
        let matched = true;
        while (si < chars.length && wi < word.length) {
            if (chars[si] !== word[wi]) {
                matched = false;
                break;
            }
            let begin = wi, char = word[wi];
            while (wi < word.length && word[wi] === char) {
                ++wi;
            }
            let count = wi - begin;
            if (count > charCounts[si] || (count < charCounts[si] && charCounts[si] < 3)) {
                matched = false;
                break;
            }
            ++si;
        }
        if (si === chars.length && wi === word.length && matched) {
            ++matchedCount;
        }
    }
    return matchedCount;
};

module.exports = expressiveWords;