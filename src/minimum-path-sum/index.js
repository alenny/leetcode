/**
 * @param {number[][]} grid
 * @return {number}
 */
const minPathSum2D = function (grid) {
    let dp = new Array(grid.length);
    for (let r = 0; r < grid.length; ++r) {
        dp[r] = new Array(grid[0].length);
    }
    dp[0][0] = grid[0][0];
    for (let r = 1; r < grid.length; ++r) {
        dp[r][0] = dp[r - 1][0] + grid[r][0];
    }
    for (let c = 1; c < grid[0].length; ++c) {
        dp[0][c] = dp[0][c - 1] + grid[0][c];
    }
    for (let r = 1; r < grid.length; ++r) {
        for (let c = 1; c < grid[0].length; ++c) {
            dp[r][c] = Math.min(dp[r - 1][c], dp[r][c - 1]) + grid[r][c];
        }
    }
    return dp[grid.length - 1][grid[0].length - 1];
};

const minPathSum = function (grid) {
    let dp = new Array(grid[0].length);
    dp[0] = grid[0][0];
    for (let c = 1; c < grid[0].length; ++c) {
        dp[c] = dp[c - 1] + grid[0][c];
    }
    for (let r = 1; r < grid.length; ++r) {
        dp[0] += grid[r][0];
        for (let c = 1; c < grid[0].length; ++c) {
            dp[c] = Math.min(dp[c], dp[c - 1]) + grid[r][c];
        }
    }
    return dp[grid[0].length - 1];
};

module.exports = minPathSum;