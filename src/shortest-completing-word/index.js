/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
const shortestCompletingWord = function (licensePlate, words) {
    let plateCharMap = new Map();
    for (let ch of licensePlate) {
        let lower = ch.toLowerCase();
        if (lower < 'a' || lower > 'z') {
            continue;
        }
        let count = plateCharMap.get(lower);
        plateCharMap.set(lower, count ? count + 1 : 1);
    }
    let foundWord = null;
    for (let word of words) {
        if (foundWord !== null && word.length >= foundWord.length) {
            continue;
        }
        let wordCharMap = new Map();
        for (let ch of word) {
            let count = wordCharMap.get(ch);
            wordCharMap.set(ch, count ? count + 1 : 1);
        }
        let match = true;
        for (let pair of plateCharMap) {
            let count = wordCharMap.get(pair[0]);
            if (!count || count < pair[1]) {
                match = false;
                break;
            }
        }
        if (match) {
            foundWord = word;
        }
    }
    return foundWord;
};

module.exports = shortestCompletingWord;