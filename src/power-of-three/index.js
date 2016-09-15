/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    if (n === 0) {
        return false;
    }
    const multi = 1000000000;
    var result = Math.log(n) / Math.log(3);
    return Math.round(result) * multi === Math.round(result * multi);
};

module.exports = isPowerOfThree;