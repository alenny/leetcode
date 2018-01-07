/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
    return sqrtHelper(x, 0, x);
};

function sqrtHelper(x, left, right) {
    if (left > right) {
        return NaN;
    }
    let mid = (left + right) >> 1;
    let sqr = mid * mid;
    if (sqr > x) {
        return sqrtHelper(x, left, mid - 1);
    }
    if (sqr < x) {
        let subRet = sqrtHelper(x, mid + 1, right);
        return Number.isNaN(subRet) ? mid : subRet;
    }
    return mid;
}

module.exports = mySqrt;