/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function (matrix) {
    let size = matrix.length;
    let levels = size >> 1;
    let tmp;
    for (let r = 0; r < levels; ++r) {
        for (let c = r; c < size - r - 1; ++c) {
            tmp = matrix[r][c];
            matrix[r][c] = matrix[size - 1 - c][r];
            matrix[size - 1 - c][r] = matrix[size - 1 - r][size - 1 - c];
            matrix[size - 1 - r][size - 1 - c] = matrix[c][size - 1 - r];
            matrix[c][size - 1 - r] = tmp;
        }
    }
};

module.exports = rotate;