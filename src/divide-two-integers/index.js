/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function (dividend, divisor) {
    let MAX_INT = Math.pow(2, 31) - 1;
    let MIN_INT = -Math.pow(2, 31);
    if (divisor === 0) {
        return MAX_INT;
    }
    if (divisor === 1) {
        return dividend;
    }
    if (dividend === divisor) {
        return 1;
    }
    if (divisor === MIN_INT) {
        return 0;
    }
    if (dividend === 0) {
        return 0;
    }
    if (dividend === MIN_INT && divisor === -1) {
        return MAX_INT;
    }
    let belowZero = dividend < 0 && divisor > 0 || dividend > 0 && divisor < 0;
    dividend = Math.abs(dividend);
    divisor = Math.abs(divisor);
    if (dividend < divisor) {
        return 0;
    }
    let originDivisor = divisor;
    let bitMoveCount = -1;
    let preDivisor;
    while (divisor > 0 && dividend >= divisor) {
        ++bitMoveCount;
        preDivisor = divisor;
        divisor = divisor + divisor;    // note: divisor << 1 could overflow as 32-bit integer
    }
    let result = 1 << bitMoveCount;
    dividend -= preDivisor;
    let move = bitMoveCount - 1;
    for (let i = bitMoveCount - 1; i >= 0; --i) {
        if (dividend === 0) {
            break;
        }
        preDivisor >>= 1;
        if (dividend < preDivisor) {
            continue;
        }
        result += 1 << i;
        dividend -= preDivisor;
    }
    return belowZero ? -result : result;
};

module.exports = divide;