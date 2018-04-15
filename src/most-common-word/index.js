/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
const mostCommonWord = function (paragraph, banned) {
    let banSet = new Set();
    banned.forEach(b => banSet.add(b));
    paragraph = paragraph.toLowerCase();
    let countMap = new Map();
    let words = paragraph.split(/[\s\!\?\'\,\;\.]+/);
    let maxWord, maxCount = 0;
    for (word of words) {
        if (word.length === 0 || banSet.has(word)) {
            continue;
        }
        let c = countMap.get(word);
        c = c ? c + 1 : 1;
        countMap.set(word, c);
        if (c > maxCount) {
            maxCount = c;
            maxWord = word;
        }
    }
    return maxWord;
};

module.exports = mostCommonWord;