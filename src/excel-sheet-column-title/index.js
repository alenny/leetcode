/**
 * @param {number} n
 * @return {string}
 */
const convertToTitle = function (n) {
    let ret = '';
    const aCode = 'A'.charCodeAt(0);
    --n;
    while (n >= 0) {
        ret = String.fromCharCode(n % 26 + aCode) + ret;
        n = Math.floor(n / 26) - 1;
    }
    return ret;
};

module.exports = convertToTitle;