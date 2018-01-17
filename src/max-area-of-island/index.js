/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function (grid) {
    if (!grid || grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    let maxArea = 0;
    let rows = grid.length;
    let cols = grid[0].length;
    let visited = new Array(rows);
    for (let r = 0; r < rows; ++r) {
        visited[r] = new Array(cols);
        visited[r].fill(false);
    }
    for (let r = 0; r < rows; ++r) {
        for (let c = 0; c < cols; ++c) {
            if (visited[r][c]) {
                continue;
            }
            if (grid[r][c] === 0) {
                visited[r][c] = true;
                continue;
            }
            let area = calArea(grid, visited, r, c);
            if (area > maxArea) {
                maxArea = area;
            }
        }
    }
    return maxArea;
};

function calArea(grid, visited, r, c) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || visited[r][c]) {
        return 0;
    }
    visited[r][c] = true;
    return grid[r][c] === 0 ? 0 : 1 + calArea(grid, visited, r - 1, c) + calArea(grid, visited, r + 1, c) + calArea(grid, visited, r, c - 1) + calArea(grid, visited, r, c + 1);
}

module.exports = maxAreaOfIsland;