/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const wordPattern = function (pattern, str) {
    let words = str.split(' ');
    if (words.length !== pattern.length) {
        return false;
    }
    let map = new Map();
    let set = new Set();
    let i = 0;
    while (i < words.length) {
        let mappedWord = map.get(pattern[i]);
        if (!mappedWord) {
            if (set.has(words[i])) {
                return false;
            }
            map.set(pattern[i], words[i]);
            set.add(words[i]);
        } else if (mappedWord !== words[i]) {
            return false;
        }
        ++i;
    }
    return true;
};

module.exports = wordPattern;