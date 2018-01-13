/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
const myPow = function (x, n) {
    if (x === 0) {
        return 0;
    }
    if (n === 0) {
        return 1;
    }
    if (n < 0) {
        return 1 / powHelper(x, -n);
    }
    return powHelper(x, n);
};

function powHelper(x, positive) {
    // have to use % 2 and / 2 instead of bit move to avoid overflow
    let p = new Array(32);
    p[1] = x;
    let pos = 1;
    let ret = 1;
    while (positive > 0) {
        if (!p[pos]) {
            p[pos] = p[pos - 1] * p[pos - 1];
        }
        if (positive % 2 === 1) {
            ret *= p[pos];
        }
        ++pos;
        positive = Math.floor(positive / 2);
    }
    return ret;
}

module.exports = myPow;