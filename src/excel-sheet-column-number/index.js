/**
 * @param {string} s
 * @return {number}
 */
const titleToNumber = function (s) {
    let ret = 0;
    let aCode = 'A'.charCodeAt(0);
    for (let i = 0; i < s.length; ++i) {
        let chCode = s.charCodeAt(i);
        ret = ret * 26 + chCode - aCode + 1;
    }
    return ret;
};

module.exports = titleToNumber;