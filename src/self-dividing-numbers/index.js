/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
const selfDividingNumbers = function (left, right) {
    let ret = [];
    for (let num = left; num <= right; ++num) {
        let n = num;
        let passed = true;
        while (n > 0) {
            let digit = n % 10;
            if (digit === 0 || num % digit !== 0) {
                passed = false;
                break;
            }
            n = Math.floor(n / 10);
        }
        if (passed) {
            ret.push(num);
        }
    }
    return ret;
};

module.exports = selfDividingNumbers;