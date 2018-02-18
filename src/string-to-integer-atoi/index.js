/**
 * @param {string} str
 * @return {number}
 */
const INT_MAX = Math.pow(2, 31) - 1;
const INT_MIN = -Math.pow(2, 31);
const myAtoi = function (str) {
    if (!str || str.length === 0) {
        return 0;
    }
    str = str.trim();
    let idx = str[0] === '-' || str[0] === '+' ? 1 : 0;
    let result = 0;
    while (idx < str.length) {
        if (str[idx] < '0' || str[idx] > '9') {
            break;
        }
        result = result * 10 + (str[idx] - 0);
        ++idx;
    }
    return str[0] === '-' ? Math.max(-result, INT_MIN) : Math.min(result, INT_MAX);
};

module.exports = myAtoi;