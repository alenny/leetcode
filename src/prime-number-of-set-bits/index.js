/**
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const countPrimeSetBits = function (L, R) {
    // Note the prime number is between 0 and 32
    let primes = new Set([2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31]);
    let count = 0;
    for (let n = L; n <= R; ++n) {
        let num = n;
        let bitOnes = 0;
        for (let j = 0; j < 32; ++j) {
            if ((num & 0x80000000) !== 0) {
                ++bitOnes;
            }
            num <<= 1;
        }
        if (primes.has(bitOnes)) {
            ++count;
        }
    }
    return count;
};

module.exports = countPrimeSetBits;