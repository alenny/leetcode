/**
 * @param {number[][]} matrix
 * @return {number}
 */
const longestIncreasingPath = function (matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }
    let cache = new Array(matrix.length);
    for (let r = 0; r < matrix.length; ++r) {
        cache[r] = [];
    }
    let longest = 0;
    for (let r = 0; r < matrix.length; ++r) {
        for (let c = 0; c < matrix[0].length; ++c) {
            longest = Math.max(longest, getLongestTo(matrix, cache, r, c));
        }
    }
    return longest;
};

function getLongestTo(matrix, cache, r, c) {
    if (cache[r][c] !== undefined) {
        return cache[r][c];
    }
    cache[r][c] = 1;
    if (r > 0 && matrix[r][c] > matrix[r - 1][c]) {
        cache[r][c] = Math.max(cache[r][c], getLongestTo(matrix, cache, r - 1, c) + 1);
    }
    if (r < matrix.length - 1 && matrix[r][c] > matrix[r + 1][c]) {
        cache[r][c] = Math.max(cache[r][c], getLongestTo(matrix, cache, r + 1, c) + 1);
    }
    if (c > 0 && matrix[r][c] > matrix[r][c - 1]) {
        cache[r][c] = Math.max(cache[r][c], getLongestTo(matrix, cache, r, c - 1) + 1);
    }
    if (c < matrix[0].length - 1 && matrix[r][c] > matrix[r][c + 1]) {
        cache[r][c] = Math.max(cache[r][c], getLongestTo(matrix, cache, r, c + 1) + 1);
    }
    return cache[r][c];
}

module.exports = longestIncreasingPath;