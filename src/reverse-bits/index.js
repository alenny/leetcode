/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
const reverseBits = function (n) {
    let ret = 0;
    for (let i = 0; i < 32; ++i) {
        ret = ret * 2 + (n & 1);    // have to use *2 instead of << 1 to force ret not to be 32-bit signed integer
        n >>= 1;
    }
    return ret;
};

module.exports = reverseBits;