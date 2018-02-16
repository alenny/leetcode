/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = function (n) {
    if (n < 1) {
        return [];
    }
    let ret = [1];
    for (let i = 1; i < n; ++i) {
        let prev = ret[i - 1];
        let tmp;
        if ((tmp = prev * 10) <= n) {
            ret.push(tmp);
        } else {
            tmp = prev + 1;
            if (tmp > n) {
                tmp = (Math.floor(prev / 10) + 1) * 10;
            }
            while (tmp % 10 === 0) {
                tmp = Math.floor(tmp / 10);
            }
            ret.push(tmp);
        }
    }
    return ret;
};

module.exports = lexicalOrder;