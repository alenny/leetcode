/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let perimeter = 0;
    for (let i = 0; i < grid.length; ++i) {
        const iLength = grid[i].length;
        for (let j = 0; j < iLength; ++j) {
            const val = grid[i][j];
            if (val === 0) {
                continue;
            }
            perimeter += 4;
            if (i > 0) {
                perimeter -= grid[i - 1][j];
            }
            if (i < grid.length - 1) {
                perimeter -= grid[i + 1][j];
            }
            if (j > 0) {
                perimeter -= grid[i][j - 1];
            }
            if (j < iLength - 1) {
                perimeter -= grid[i][j + 1];
            }
        }
    }
    return perimeter;
};

module.exports = islandPerimeter;