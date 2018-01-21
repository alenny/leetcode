/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */
const licenseKeyFormatting = function (S, K) {
    let chars = [];
    let count = 0;
    for (let i = S.length - 1; i >= 0; --i) {
        if (S[i] === '-') {
            continue;
        }
        chars.push(S[i]);
        if (++count === K) {
            chars.push('-');
            count = 0;
        }
    }
    while (chars[chars.length - 1] === '-') {
        chars.pop();
    }
    chars.reverse();
    return chars.join('').toUpperCase();
};

module.exports = licenseKeyFormatting;