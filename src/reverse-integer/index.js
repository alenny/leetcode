/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let newNumber = 0;
    let absX = Math.abs(x);
    while (absX > 0) {
        newNumber = newNumber * 10 + (absX % 10);
        absX = Math.floor(absX / 10);
    }
    if (newNumber > Math.pow(2, 31) - 1) {
        return 0;
    }
    return x < 0 ? -newNumber : newNumber;
};

module.exports = reverse;