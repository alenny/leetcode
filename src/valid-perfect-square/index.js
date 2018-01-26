/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
    return check(num, 1, num);
};

function check(num, left, right) {
    if (left > right) {
        return false;
    }
    let mid = left + right >> 1;
    let midSquare = mid * mid;
    if (midSquare === num) {
        return true;
    }
    if (midSquare > num) {
        return check(num, left, mid - 1);
    }
    return check(num, mid + 1, right);
}

module.exports = isPerfectSquare;