/**
 * @param {number[][]} grid
 * @return {number}
 */
const numMagicSquaresInside = function (grid) {
    if (grid.length < 3 || grid[0].length < 3) {
        return 0;
    }
    // 5 must be at the center of the magic 3x3 grid
    let rows = grid.length, cols = grid[0].length;
    let count = 0;
    for (let r = 1; r < rows - 1; ++r) {
        for (let c = 1; c < cols - 1; ++c) {
            if (grid[r][c] === 5 && allDistinct(grid, r, c) &&
                getSum(grid, [[r - 1, c - 1], [r + 1, c + 1]]) === 10 &&
                getSum(grid, [[r - 1, c + 1], [r + 1, c - 1]]) === 10 &&
                getSum(grid, [[r - 1, c - 1], [r - 1, c], [r - 1, c + 1]]) === 15 &&
                getSum(grid, [[r - 1, c - 1], [r, c - 1], [r + 1, c - 1]]) === 15 &&
                getSum(grid, [[r - 1, c + 1], [r, c + 1], [r + 1, c + 1]]) === 15 &&
                getSum(grid, [[r + 1, c - 1], [r + 1, c], [r + 1, c + 1]]) === 15) {
                ++count;
            }
        }
    }
    return count;
};

function allDistinct(grid, cr, cc) {
    let set = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    for (let dr = -1; dr <= 1; ++dr) {
        for (let dc = -1; dc <= 1; ++dc) {
            set.delete(grid[cr + dr][cc + dc]);
        }
    }
    return set.size === 0;
}

function getSum(grid, poses) {
    let sum = 0;
    for (let pos of poses) {
        sum += grid[pos[0]][pos[1]];
    }
    return sum;
}

module.exports = numMagicSquaresInside;