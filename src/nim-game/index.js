/**
 * @param {number} n
 * @return {boolean}
 */
const canWinNim = function (n) {
    // cannot win when n % 4 === 0
    return (n & 3) !== 0;
};

module.exports = canWinNim;