/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
const fractionToDecimal = function (numerator, denominator) {
    if (numerator === 0) {
        return '0';
    }
    let symbol = numerator < 0 && denominator < 0 || numerator > 0 && denominator > 0 ? '' : '-';
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    let intPart = Math.floor(numerator / denominator);
    let digits = [], divResults = new Map();
    let remaining = numerator % denominator;
    while (remaining > 0 && !divResults.has(remaining)) {
        digits.push(Math.floor(remaining * 10 / denominator));
        divResults.set(remaining, digits.length - 1);
        remaining = remaining * 10 % denominator;
    }
    if (digits.length === 0) {
        return symbol + intPart.toString();
    }
    let digitPart = digits.join('');
    if (remaining === 0) {
        return symbol + intPart + '.' + digitPart;
    }
    let idx = divResults.get(remaining);
    return symbol + intPart + '.' + digitPart.substring(0, idx) + '(' + digitPart.substring(idx) + ')';
};

module.exports = fractionToDecimal;