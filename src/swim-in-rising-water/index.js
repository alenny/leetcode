/**
 * @param {number[][]} grid
 * @return {number}
 */
const swimInWater = function (grid) {
    if (grid.length === 0 || grid[0].length === 0) {
        return 0;
    }
    // BFS
    let rows = grid.length, cols = grid[0].length;
    let time = new Array(rows);
    for (let r = 0; r < rows; ++r) {
        time[r] = new Array(cols);
        time[r].fill(Number.POSITIVE_INFINITY);
    }
    time[0][0] = grid[0][0];
    let queue = [[0, 0]];
    while (queue.length > 0) {
        let nextQueue = [], nextSet = new Set();
        for (let pos of queue) {
            if (pos[0] > 0) {
                handleNext(grid, time, pos[0], pos[1], pos[0] - 1, pos[1], nextQueue, nextSet);
            }
            if (pos[0] < rows - 1) {
                handleNext(grid, time, pos[0], pos[1], pos[0] + 1, pos[1], nextQueue, nextSet);
            }
            if (pos[1] > 0) {
                handleNext(grid, time, pos[0], pos[1], pos[0], pos[1] - 1, nextQueue, nextSet);
            }
            if (pos[1] < cols - 1) {
                handleNext(grid, time, pos[0], pos[1], pos[0], pos[1] + 1, nextQueue, nextSet);
            }
        }
        queue = nextQueue;
    }
    return time[rows - 1][cols - 1];
};

function handleNext(grid, time, r0, c0, r1, c1, nextQueue, nextSet) {
    let time0 = time[r0][c0];
    let t = Math.max(grid[r1][c1], time0);
    if (t < time[r1][c1]) {
        time[r1][c1] = t;
        let posKey = getPosKey(r1, c1);
        if (!nextSet.has(posKey)) {
            nextQueue.push([r1, c1]);
            nextSet.add(posKey);
        }
    }
}

function getPosKey(r, c) {
    return r + ',' + c;
}

module.exports = swimInWater;