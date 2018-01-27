/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLastWord = function (s) {
    s = s.trim();
    let lastSpacePos = s.lastIndexOf(' ');
    return lastSpacePos < 0 ? s.length : s.length - lastSpacePos - 1;
};

module.exports = lengthOfLastWord;