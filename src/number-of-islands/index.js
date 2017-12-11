/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = function (grid) {
    if (!grid || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    let rows = grid.length, cols = grid[0].length;
    let visited = new Array(rows);
    for (let r = 0; r < rows; ++r) {
        visited[r] = new Array(cols);
        visited[r].fill(false);
    }
    let islands = 0;
    for (let r = 0; r < rows; ++r) {
        for (let c = 0; c < cols; ++c) {
            if (visited[r][c]) {
                continue;
            }
            if (grid[r][c] === '0') {
                visited[r][c] = true;
                continue;
            }
            ++islands;
            spread(grid, visited, rows, cols, r, c);
        }
    }
    return islands;
};

function spread(grid, visited, rows, cols, r, c) {
    if (r < 0 || r >= rows || c < 0 || c >= cols || visited[r][c]) {
        return;
    }
    visited[r][c] = true;
    if (grid[r][c] === '1') {
        spread(grid, visited, rows, cols, r - 1, c);
        spread(grid, visited, rows, cols, r, c - 1);
        spread(grid, visited, rows, cols, r, c + 1);
        spread(grid, visited, rows, cols, r + 1, c);
    }
}

module.exports = numIslands;