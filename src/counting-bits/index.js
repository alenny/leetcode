/**
 * @param {number} num
 * @return {number[]}
 */
const countBits = function (num) {
    let ret = [0];
    for (let n = 1; n <= num; ++n) {
        let exp = Math.floor(Math.log2(n));
        ret[n] = 1 + ret[n - (1 << exp)];
    }
    return ret;
};

module.exports = countBits;