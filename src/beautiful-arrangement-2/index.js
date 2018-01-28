/**
 * @param {number} n
 * @param {number} k
 * @return {number[]}
 */
const constructArray = function (n, k) {
    let ret = [];
    let i = 1;
    let next = n;
    while (i < next) {
        ret.push(i);
        next = k + 2 - i;
        if (next <= i) {
            break;
        }
        ret.push(next);
        ++i;
    }
    i = k + 2;
    while (i <= n) {
        ret.push(i++);
    }
    return ret;
};

module.exports = constructArray;