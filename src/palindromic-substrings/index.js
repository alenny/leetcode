/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = function (s) {
    let result = 0;
    for (let i = 0; i < s.length - 1; ++i) {
        let j = 0;
        // for case like aba
        while (i - j >= 0 && i + j < s.length && s[i - j] === s[i + j]) {
            ++result;
            ++j;
        }
        // for case like abba
        let p = i;
        let q = i + 1;
        while (p >= 0 && q < s.length && s[p] === s[q]) {
            ++result;
            --p;
            ++q;
        }
    }
    ++result;   // for the last letter of s
    return result;
};

module.exports = countSubstrings;