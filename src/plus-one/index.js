/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function (digits) {
    let up = true;
    let i = digits.length - 1;
    for (; i >= 0; --i) {
        if (!up) {
            break;
        }
        up = digits[i] === 9;
        digits[i] = up ? 0 : digits[i] + 1;
    }
    if (up && i < 0) {
        digits.splice(0, 0, 1);
    }
    return digits;
};

module.exports = plusOne;