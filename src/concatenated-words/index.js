/**
 * @param {string[]} words
 * @return {string[]}
 */
const findAllConcatenatedWordsInADict = function (words) {
    if (words.length === 0) {
        return [];
    }
    words.sort((a, b) => a.length - b.length);
    let lenToWords = [];
    let ret = [];
    for (let i = 0; i < words.length; ++i) {
        let w = words[i];
        if (w === '') {
            continue;
        }
        if (!lenToWords[w.length]) {
            lenToWords[w.length] = new Set();
        }
        if (isConcat(lenToWords, w, 0)) {
            ret.push(w);
        }
        lenToWords[w.length].add(w);
    }
    return ret;
};

function isConcat(lenToWords, w, idx) {
    if (idx === w.length) {
        return true;
    }
    for (let len = 1; len <= w.length - idx; ++len) {
        if (!lenToWords[len]) {
            continue;
        }
        let start = w.substr(idx, len);
        if (!lenToWords[len].has(start)) {
            continue;
        }
        if (isConcat(lenToWords, w, idx + len)) {
            return true;
        }
    }
    return false;
}

module.exports = findAllConcatenatedWordsInADict;