/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const setZeroes = function (matrix) {
    // O(1) space
    if (!matrix || matrix.length === 0) {
        return;
    }
    let rows = matrix.length;
    let cols = matrix[0].length;
    let firstRowZero = false;
    for (let c = 0; c < cols; ++c) {
        if (matrix[0][c] === 0) {
            firstRowZero = true;
            break;
        }
    }
    let firstColZero = false;
    for (let r = 0; r < rows; ++r) {
        if (matrix[r][0] === 0) {
            firstColZero = true;
            break;
        }
    }
    for (let r = 1; r < rows; ++r) {
        for (let c = 1; c < cols; ++c) {
            if (matrix[r][c] === 0) {
                matrix[0][c] = 0;
                matrix[r][0] = 0;
            }
        }
        if (matrix[r][0] === 0) {
            matrix[r].fill(0);
        }
    }
    for (let c = 1; c < cols; ++c) {
        if (matrix[0][c] !== 0) {
            continue;
        }
        for (let r = 0; r < rows; ++r) {
            matrix[r][c] = 0;
        }
    }
    if (firstRowZero) {
        matrix[0].fill(0);
    }
    if (firstColZero) {
        for (let r = 0; r < rows; ++r) {
            matrix[r][0] = 0;
        }
    }
};

module.exports = setZeroes;