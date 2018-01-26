/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function (n) {
    return Math.floor(Math.sqrt(n + n + 0.25) - 0.5);
};

module.exports = arrangeCoins;