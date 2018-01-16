/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
const spiralOrder = function (matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }
    let totalRows = matrix.length;
    let totalCols = matrix[0].length;
    let ret = new Array(matrix.length * matrix[0].length);
    for (let r = 0; r < totalRows; ++r) {
        for (let c = 0; c < totalCols; ++c) {
            ret[calIndex(totalRows, totalCols, r, c)] = matrix[r][c];
        }
    }
    return ret;
};

function calIndex(rows, cols, r, c) {
    let isUpRow = r <= rows - r - 1;
    let rowLevel = Math.min(r, rows - r - 1);
    let isLeftCol = c < cols - c - 1;
    let colLevel = Math.min(c, cols - c - 1);
    let level = Math.min(rowLevel, colLevel);
    let precede = level * ((rows << 1) + (cols << 1) - (level << 2));
    let idx;
    if (rowLevel <= colLevel) {
        idx = isUpRow ? precede + c - level : precede + (cols << 1) + rows - 5 * level - c - 3;
    } else {
        idx = isLeftCol ? precede + (cols << 1) + (rows << 1) - 7 * level - r - 4 : precede + cols - 3 * level + r - 1;
    }
    return idx;
}

module.exports = spiralOrder;