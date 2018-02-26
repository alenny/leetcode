/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const rangeBitwiseAnd = function (m, n) {
    let ret = 0, bitPos = 0;
    while (m > 0) {
        if ((m & 1) && m === n) {
            ret |= (1 << bitPos);
        }
        m >>= 1;
        n >>= 1;
        ++bitPos;
    }
    return ret;
};

module.exports = rangeBitwiseAnd;