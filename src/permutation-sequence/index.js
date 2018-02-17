/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const getPermutation = function (n, k) {
    --k;
    let digits = [];
    let factorials = [1];
    for (let i = 1; i <= n; ++i) {
        factorials[i] = factorials[i - 1] * i;
        digits.push(i);
    }
    let result = '';
    for (let i = n - 1; i > 0; --i) {
        let idx = Math.floor(k / factorials[i]);
        result += digits[idx];
        digits.splice(idx, 1);
        k = k % factorials[i];
    }
    result += digits[0];
    return result;
};

module.exports = getPermutation;