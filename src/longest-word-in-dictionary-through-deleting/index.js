/**
 * @param {string} s
 * @param {string[]} d
 * @return {string}
 */
const findLongestWord = function (s, d) {
    let map = new Map();
    for (let i = 0; i < s.length; ++i) {
        let indices = map.get(s[i]);
        if (!indices) {
            map.set(s[i], [i]);
        } else {
            indices.push(i);
        }
    }
    let longestString = '';
    for (let word of d) {
        let prevIdx = -1;
        let found = true;
        for (let ch of word) {
            let indices = map.get(ch);
            if (!indices) {
                found = false;
                break;
            }
            let idxFound = false;
            for (let idx of indices) {
                if (idx > prevIdx) {
                    idxFound = true;
                    prevIdx = idx;
                    break;
                }
            }
            if (!idxFound) {
                found = false;
                break;
            }
        }
        if (found && (word.length > longestString.length || word.length === longestString.length && word < longestString)) {
            longestString = word;
        }
    }
    return longestString;
};

module.exports = findLongestWord;