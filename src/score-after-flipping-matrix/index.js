/**
 * @param {number[][]} A
 * @return {number}
 */
const matrixScore = function (A) {
    let rows = A.length, cols = A[0].length;
    for (let r = 0; r < rows; ++r) {
        if (A[r][0] === 1) {
            continue;
        }
        for (let c = 0; c < cols; ++c) {
            A[r][c] = 1 - A[r][c];
        }
    }
    let ones = [rows];
    for (let c = 1; c < cols; ++c) {
        let oneCount = 0;
        for (let r = 0; r < rows; ++r) {
            oneCount += A[r][c];
        }
        ones.push(Math.max(oneCount, rows - oneCount));
    }
    let total = 0;
    for (let c = 0; c < cols; ++c) {
        total += ones[c] * (1 << cols - c - 1);
    }
    return total;
};

module.exports = matrixScore;