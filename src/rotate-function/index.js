/**
 * @param {number[]} A
 * @return {number}
 */
const maxRotateFunction = function (A) {
    let n = A.length;
    let productSum = 0, sum = 0;
    for (let i = 0; i < n; ++i) {
        sum += A[i];
        productSum += A[i] * i;
    }
    let maxProductSum = productSum;
    for (let i = n - 1; i >= 0; --i) {
        productSum = productSum + sum - n * A[i];
        if (productSum > maxProductSum) {
            maxProductSum = productSum;
        }
    }
    return maxProductSum;
};

module.exports = maxRotateFunction;