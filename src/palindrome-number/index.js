/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function (x) {
    let y = 0;
    x1 = x;
    while (x > 0) {
        y = y * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    return x1 === y;
};

module.exports = isPalindrome;