/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
    let map = new Map();
    for (let ch of s) {
        let count = map.get(ch);
        map.set(ch, count ? count + 1 : 1);
    }
    let oddCount = 0;
    for (let count of map.values()) {
        if ((count & 1) !== 0) {
            ++oddCount;
        }
    }
    return oddCount === 0 ? s.length : s.length - oddCount + 1;
};

module.exports = longestPalindrome;