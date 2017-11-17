/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
const uniquePaths = function (m, n) {
    if (m <= 0 || n <= 0) {
        return 0;
    }
    return uniquePaths1D(m, n);
};

function uniquePaths2D(m, n) {
    let matrix = new Array(m);
    for (let i = 0; i < m; ++i) {
        matrix[i] = new Array(n);
        matrix[i][0] = 1;
    }
    for (let j = 0; j < n; ++j) {
        matrix[0][j] = 1;
    }
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            matrix[i][j] = matrix[i - 1][j] + matrix[i][j - 1];
        }
    }
    return matrix[m - 1][n - 1];
}

function uniquePaths1D(m, n) {
    let arr = new Array(n);
    arr.fill(1);
    for (let i = 1; i < m; ++i) {
        for (let j = 1; j < n; ++j) {
            arr[j] += arr[j - 1];
        }
    }
    return arr[n - 1];
}

module.exports = uniquePaths;