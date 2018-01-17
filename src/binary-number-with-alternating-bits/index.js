/**
 * @param {number} n
 * @return {boolean}
 */
const hasAlternatingBits = function (n) {
    let prev;
    let preZeroes = 0;
    while ((prev = n & 0x80000000) === 0) {
        n <<= 1;
        ++preZeroes;
    }
    for (let i = preZeroes + 1; i < 32; ++i) {
        n <<= 1;
        let curr = n & 0x80000000;
        if (prev === curr) {
            return false;
        }
        prev = curr;
    }
    return true;
};

module.exports = hasAlternatingBits;