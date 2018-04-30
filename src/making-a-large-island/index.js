/**
 * @param {number[][]} grid
 * @return {number}
 */
const largestIsland = function (grid) {
    if (grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    let zeroes = [], areas = [0];
    let rows = grid.length, cols = grid[0].length;
    let serial = 2;
    let maxArea = 0;
    for (let r = 0; r < rows; ++r) {
        for (let c = 0; c < cols; ++c) {
            if (grid[r][c] === 0) {
                zeroes.push([r, c]);
                continue;
            }
            if (grid[r][c] > 1) {
                continue;
            }
            areas[serial] = markArea(grid, r, c, serial);
            maxArea = Math.max(maxArea, areas[serial]);
            ++serial;
        }
    }
    for (let zero of zeroes) {
        maxArea = Math.max(maxArea, calConnectedArea(grid, areas, zero[0], zero[1]));
    }
    return maxArea;
};

function markArea(grid, r, c, serial) {
    if (r < 0 || r >= grid.length || c < 0 || c >= grid[0].length || grid[r][c] !== 1) {
        return 0;
    }
    grid[r][c] = serial;
    return 1 + markArea(grid, r - 1, c, serial) + markArea(grid, r + 1, c, serial) + markArea(grid, r, c - 1, serial) + markArea(grid, r, c + 1, serial);
}

function calConnectedArea(grid, areas, r, c) {
    let set = new Set();
    if (r > 0) {
        set.add(grid[r - 1][c]);
    }
    if (r < grid.length - 1) {
        set.add(grid[r + 1][c]);
    }
    if (c > 0) {
        set.add(grid[r][c - 1]);
    }
    if (c < grid[0].length - 1) {
        set.add(grid[r][c + 1]);
    }
    let area = 1;
    for (let serial of set.keys()) {
        area += areas[serial];
    }
    return area;
}

module.exports = largestIsland;