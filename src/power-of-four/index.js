/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function (num) {
    if (num === 0) {
        return false;
    }
    var result = Math.log(num) / Math.log(4);
    return Math.floor(result) === result;
};

var isPowerOfFour_Binary = function (num) {
    var match = 1;
    for (var i = 0; i < 31; i += 2) {
        if (!(num ^ match)) {
            return true;
        }
        match <<= 2;
    }
    return false;
};

var isPowerOfFour_Recursion = function (num) {
    if (num === 1) {
        return true;
    }
    if (num < 1) {
        return false;
    }
    return num % 4 === 0 && isPowerOfFour(num / 4);
};

module.exports = isPowerOfFour;