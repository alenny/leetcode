/**
 * @param {number} n
 * @return {number[][]}
 */
const generateMatrix = function (n) {
    let result = new Array(n);
    for (let m = 0; m < n; ++m) {
        result[m] = new Array(n);
    }
    let i = 0, j = 0;
    let step = [0, 1], endRow = n - 1, endCol = n - 1;
    for (let m = 1; m <= n * n; ++m) {
        result[i][j] = m;
        if (step[1] !== 0 && j === endCol) {
            endCol = step[1] > 0 ? n - endCol - 1 : n - endCol - 2;
            step[0] = step[1] > 0 ? 1 : -1;
            step[1] = 0;
        } else if (step[0] !== 0 && i === endRow) {
            endRow = step[0] > 0 ? n - endRow : n - endRow - 1;
            step[1] = step[0] > 0 ? -1 : 1;
            step[0] = 0;
        }
        i += step[0];
        j += step[1];
    }
    return result;
};

module.exports = generateMatrix;