/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
const uniquePathsWithObstacles2D = function (obstacleGrid) {
    let results = new Array(obstacleGrid.length);
    for (let r = 0; r < obstacleGrid.length; ++r) {
        results[r] = new Array(obstacleGrid[0].length);
        results[r].fill(0);
    }
    for (let r = 0; r < obstacleGrid.length; ++r) {
        if (obstacleGrid[r][0] === 1) {
            break;
        }
        results[r][0] = 1;
    }
    for (let c = 0; c < obstacleGrid[0].length; ++c) {
        if (obstacleGrid[0][c] === 1) {
            break;
        }
        results[0][c] = 1;
    }
    for (let r = 1; r < obstacleGrid.length; ++r) {
        for (let c = 1; c < obstacleGrid[0].length; ++c) {
            if (obstacleGrid[r][c] === 1) {
                continue;
            }
            if (obstacleGrid[r - 1][c] === 0) {
                results[r][c] += results[r - 1][c];
            }
            if (obstacleGrid[r][c - 1] === 0) {
                results[r][c] += results[r][c - 1];
            }
        }
    }
    return results[obstacleGrid.length - 1][obstacleGrid[0].length - 1];
};

const uniquePathsWithObstacles = function (obstacleGrid) {
    let dp = new Array(obstacleGrid[0].length);
    dp.fill(0);
    for (let c = 0; c < obstacleGrid[0].length; ++c) {
        if (obstacleGrid[0][c] === 1) {
            break;
        }
        dp[c] = 1;
    }
    for (let r = 1; r < obstacleGrid.length; ++r) {
        if (obstacleGrid[r][0] === 1) {
            dp[0] = 0;
        }
        for (let c = 1; c < obstacleGrid[0].length; ++c) {
            if (obstacleGrid[r][c] === 1) {
                dp[c] = 0;
                continue;
            }
            if (obstacleGrid[r][c - 1] === 0) {
                dp[c] += dp[c - 1];
            }
        }
    }
    return dp[obstacleGrid[0].length - 1];
};

module.exports = uniquePathsWithObstacles;