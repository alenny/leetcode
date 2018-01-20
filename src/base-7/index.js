/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = function (num) {
    if (num === 0) {
        return '0';
    }
    let ret = '';
    let belowZero = num < 0;
    let abs = Math.abs(num);
    while (abs > 0) {
        ret = (abs % 7).toString() + ret;
        abs = Math.floor(abs / 7);
    }
    return belowZero ? '-' + ret : ret;
};

module.exports = convertToBase7;