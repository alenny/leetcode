/**
 * @param {number} n
 * @return {number}
 */
const trailingZeroes = function (n) {
    let c = Math.floor(Math.log(n) / Math.log(5));
    let fiveFactors = 0;
    for (let i = 1; i <= c; ++i) {
        fiveFactors += Math.floor(n / Math.pow(5, i));
    }
    return fiveFactors;
};

module.exports = trailingZeroes;