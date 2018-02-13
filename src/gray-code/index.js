/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = function (n) {
    if (n === 0) {
        return [0];
    }
    let ret = [0, 1];
    for (let i = 1; i < n; ++i) {
        let base = 1 << i;
        for (let j = ret.length - 1; j >= 0; --j) {
            ret.push(ret[j] | base);
        }
    }
    return ret;
};

module.exports = grayCode;