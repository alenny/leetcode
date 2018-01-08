/**
 * @param {number} n - a positive integer
 * @return {number}
 */
const hammingWeight = function (n) {
    let c = 0;
    for (let i = 0; i < 32; ++i) {
        c += n & 1;
        n = n >> 1;
    }
    return c;
};

module.exports = hammingWeight;