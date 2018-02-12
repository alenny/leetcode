/**
 * @param {string} str
 * @returns {string}
 */
const reverseWords = function (str) {
    let words = str.split(' ');
    let newWords = [];
    for (let i = words.length - 1; i >= 0; --i) {
        if (words[i].length > 0) {
            newWords.push(words[i]);
        }
    }
    return newWords.join(' ');
};

module.exports = reverseWords;