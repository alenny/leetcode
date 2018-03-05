/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
const numSubarrayBoundedMax = function (A, L, R) {
    let left = 0, total = 0;
    while (left < A.length) {
        while (left < A.length && A[left] > R) {
            ++left;
        }
        if (left === A.length) {
            break;
        }
        let right = left, subCount = 0;
        while (right < A.length && A[right] <= R) {
            if (A[right] >= L) {
                subCount = right - left + 1;
            }
            total += subCount;
            ++right;
        }
        if (right === A.length) {
            break;
        }
        left = right + 1;
    }
    return total;
};

module.exports = numSubarrayBoundedMax;