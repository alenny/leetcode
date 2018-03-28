/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxIncreaseKeepingSkyline = function (grid) {
    if (grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    let rows = grid.length, cols = grid[0].length;
    let maxOfRows = new Array(rows);
    maxOfRows.fill(0);
    let maxOfCols = new Array(cols);
    maxOfCols.fill(0);
    for (let r = 0; r < rows; ++r) {
        for (let c = 0; c < cols; ++c) {
            maxOfRows[r] = Math.max(maxOfRows[r], grid[r][c]);
            maxOfCols[c] = Math.max(maxOfCols[c], grid[r][c]);
        }
    }
    let addedHeight = 0;
    for (let r = 0; r < rows; ++r) {
        for (let c = 0; c < cols; ++c) {
            addedHeight += Math.min(maxOfRows[r], maxOfCols[c]) - grid[r][c];
        }
    }
    return addedHeight;
};

module.exports = maxIncreaseKeepingSkyline;