/**
 * @param {number} c
 * @return {boolean}
 */
const judgeSquareSum = function (c) {
    for (let i = 0; i <= Math.sqrt(c / 2); ++i) {
        let x = c - i * i;
        let sqrtX = Math.sqrt(x);
        if (sqrtX === Math.floor(sqrtX)) {
            return true;
        }
    }
    return false;
};

module.exports = judgeSquareSum;