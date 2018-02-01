/**
 * @param {number} n
 * @return {number}
 */
const countNumbersWithUniqueDigits = function (n) {
    if (n < 2) {
        return Math.pow(10, n);
    }
    // suppose i=4, nonUniques[4] means all non-unique-digit numbers within [1000,9999]
    // and uniques[4] means all unique-digit numbers within [1000,9999]
    // Note any i-digit number can be made by appending one digit (0-9) after a (i-1)-digit number when i>=3
    let nonUniques = [0, 0, 9];
    let uniques = [1, 10, 81];
    let totalUniques = 91;
    for (let i = 3; i <= n; ++i) {
        nonUniques[i] = nonUniques[i - 1] * 10 + uniques[i - 1] * (i - 1);
        uniques[i] = 9 * Math.pow(10, i - 1) - nonUniques[i];
        totalUniques += uniques[i];
    }
    return totalUniques;
};

module.exports = countNumbersWithUniqueDigits;