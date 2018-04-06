/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const updateMatrix = function (matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return matrix;
    }
    let rows = matrix.length, cols = matrix[0].length;
    let zeros = [];
    let ret = new Array(rows);
    for (let r = 0; r < rows; ++r) {
        ret[r] = new Array(cols);
        ret[r].fill(Number.POSITIVE_INFINITY);
    }
    for (let r = 0; r < rows; ++r) {
        for (let c = 0; c < cols; ++c) {
            if (matrix[r][c] === 1) {
                continue;
            }
            zeros.push([r, c]);
            ret[r][c] = 0;
            if (r > 0 && matrix[r - 1][c] === 1) {
                ret[r - 1][c] = 1;
            }
            if (r < rows - 1 && matrix[r + 1][c] === 1) {
                ret[r + 1][c] = 1;
            }
            if (c > 0 && matrix[r][c - 1] === 1) {
                ret[r][c - 1] = 1;
            }
            if (c < cols - 1 && matrix[r][c + 1] === 1) {
                matrix[r][c + 1] = 1;
            }
        }
    }
    for (let r = 0; r < rows; ++r) {
        for (let c = 0; c < cols; ++c) {
            if (ret[r][c] !== Number.POSITIVE_INFINITY) {
                continue;
            }
            for (let zero of zeros) {
                ret[r][c] = Math.min(ret[r][c], Math.abs(zero[0] - r) + Math.abs(zero[1] - c));
            }
        }
    }
    return ret;
};

module.exports = updateMatrix;