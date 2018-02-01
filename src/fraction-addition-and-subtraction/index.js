/**
 * @param {string} expression
 * @return {string}
 */
const fractionAddition = function (expression) {
    let regex = /[+-]?\d+\/\-?\d+/g;
    let fractions = expression.match(regex);
    let oneDenominator = 1;
    let sumNumerators = 0;
    for (let i = 0; i < fractions.length; ++i) {
        let parts = fractions[i].split('/');
        let currDenominator = Number.parseInt(parts[1]);
        let currNumerator = Number.parseInt(parts[0]);
        let prevDenominator = oneDenominator;
        oneDenominator *= currDenominator;
        sumNumerators = sumNumerators * currDenominator + currNumerator * prevDenominator;
    }
    if (sumNumerators === 0) {
        return '0/1';
    }
    let absSum = Math.abs(sumNumerators);
    let divisor = greatestCommonDivisor(absSum, oneDenominator);
    absSum /= divisor;
    oneDenominator /= divisor;
    return sumNumerators < 0 ? '-' + absSum + '/' + oneDenominator : absSum + '/' + oneDenominator;
};

function greatestCommonDivisor(a, b) {
    return a === 0 ? b : greatestCommonDivisor(b % a, a);
}

module.exports = fractionAddition;