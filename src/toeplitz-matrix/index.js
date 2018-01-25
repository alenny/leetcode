/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
const isToeplitzMatrix = function (matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return true;
    }
    let rows = matrix.length;
    let cols = matrix[0].length;
    for (let r = 1; r < rows; ++r) {
        for (let c = 1; c < cols; ++c) {
            if (matrix[r][c] !== matrix[r - 1][c - 1]) {
                return false;
            }
        }
    }
    return true;
};

module.exports = isToeplitzMatrix;