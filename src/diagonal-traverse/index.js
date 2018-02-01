/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const findDiagonalOrder = function (matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }
    let rows = matrix.length, cols = matrix[0].length;
    let ret = [];
    for (let dist = 0; dist <= rows + cols - 2; ++dist) {
        if (dist & 1) {
            // odd dist
            let startRow = Math.max(0, dist - cols + 1);
            let endRow = Math.min(dist, rows - 1);
            for (let r = startRow; r <= endRow; ++r) {
                ret.push(matrix[r][dist - r]);
            }
        } else {
            // even dist
            let startRow = Math.min(dist, rows - 1);
            let endRow = Math.max(0, dist - cols + 1);
            for (let r = startRow; r >= endRow; --r) {
                ret.push(matrix[r][dist - r]);
            }
        }
    }
    return ret;
};

module.exports = findDiagonalOrder;