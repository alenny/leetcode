/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
const customSortString = function (S, T) {
    let map = new Map();
    for (let i = 0; i < S.length; ++i) {
        map.set(S[i], i);
    }
    let chars = new Array(S.length), otherChars = '';
    chars.fill('');
    for (let ch of T) {
        let pos = map.get(ch);
        if (pos === undefined) {
            otherChars += ch;
        } else {
            chars[pos] += ch;
        }
    }
    return chars.join('') + otherChars;
};

module.exports = customSortString;