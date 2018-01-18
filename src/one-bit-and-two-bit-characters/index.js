/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = function (bits) {
    let consecutiveOnesBeforeLastZero = 0;
    for (let i = bits.length - 2; i >= 0; --i) {
        if (bits[i] === 0) {
            break;
        }
        ++consecutiveOnesBeforeLastZero;
    }
    // true if the count of 1 before the last 0 is even
    return (consecutiveOnesBeforeLastZero & 1) === 0 ? true : false;
};

module.exports = isOneBitCharacter;