/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function (num) {
    let leadingZeros = 0;
    while ((num & 0x80000000) === 0) {
        ++leadingZeros;
        num <<= 1;
    }
    let bitsLeft = 32 - leadingZeros;
    let result = 0;
    while (bitsLeft > 0) {
        result <<= 1;
        if ((num & 0x80000000) === 0) {
            result |= 1;
        }
        num <<= 1;
        --bitsLeft;
    }
    return result;
};

module.exports = findComplement;