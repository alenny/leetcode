/**
 * @param {number} n
 * @return {number}
 */
const findNthDigit = function (n) {
    let level = 0;
    let start, end = 0;
    while (end < n) {
        ++level;
        start = end + 1;
        end += 9 * Math.pow(10, level - 1) * level;
    }
    let number = Math.pow(10, level - 1) + Math.floor((n - start) / level);
    let digitIndex = (n - start) % level;
    return Math.floor(number / Math.pow(10, level - digitIndex - 1)) % 10;
};

module.exports = findNthDigit;