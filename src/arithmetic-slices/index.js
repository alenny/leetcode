/**
 * @param {number[]} A
 * @return {number}
 */
const numberOfArithmeticSlices = function (A) {
    if (A.length < 3) {
        return 0;
    }
    let count = 0;
    let start = 0, end = 1, diff = A[1] - A[0];
    while (end < A.length - 1) {
        while (end < A.length - 1 && A[end + 1] - A[end] === diff) {
            ++end;
        }
        let len = end - start + 1;
        if (len >= 3) {
            let n = len - 3 + 1;
            count += n * (n + 1) >> 1;
        }
        start = end;
        end = start + 1;
        diff = A[end] - A[start];
    }
    return count;
};

module.exports = numberOfArithmeticSlices;