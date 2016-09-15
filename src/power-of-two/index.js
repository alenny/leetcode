/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n === 0) {
        return false;
    }
    const multi = 1000000000;
    var result = Math.log(n) / Math.log(2);
    return Math.round(result) * multi === Math.round(result * multi);
};

module.exports = isPowerOfTwo;