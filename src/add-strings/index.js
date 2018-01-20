/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
    let i1 = num1.length - 1, i2 = num2.length - 1;
    let extra = 0;
    let ret = '';
    const ZERO = '0'.charCodeAt(0);
    const TWO_ZERO = ZERO * 2;
    while (i1 >= 0 && i2 >= 0) {
        let sum = num1.charCodeAt(i1--) + num2.charCodeAt(i2--) + extra - TWO_ZERO;
        extra = Math.floor(sum / 10);
        ret = (sum % 10).toString() + ret;
    }
    let i, num;
    [i, num] = i1 >= 0 ? [i1, num1] : [i2, num2];
    while (i >= 0) {
        let sum = num.charCodeAt(i--) + extra - ZERO;
        extra = Math.floor(sum / 10);
        ret = (sum % 10).toString() + ret;
    }
    if (extra === 1) {
        ret = '1' + ret;
    }
    return ret;
};

module.exports = addStrings;