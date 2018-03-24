/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
const pacificAtlantic = function (matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) {
        return [];
    }
    let rows = matrix.length, cols = matrix[0].length;
    let toPacific = new Array(rows);
    toPacific[0] = new Array(cols);
    toPacific[0].fill(true);
    for (let r = 1; r < rows; ++r) {
        toPacific[r] = new Array(cols);
        toPacific[r][0] = true;
    }
    for (let c = 0; c < cols; ++c) {
        spread(matrix, toPacific, 0, c);
    }
    for (let r = 1; r < rows; ++r) {
        spread(matrix, toPacific, r, 0);
    }
    let toAtlantic = new Array(rows);
    toAtlantic[rows - 1] = new Array(cols);
    toAtlantic[rows - 1].fill(true);
    for (let r = 0; r < rows - 1; ++r) {
        toAtlantic[r] = new Array(cols);
        toAtlantic[r][cols - 1] = true;
    }
    for (let c = 0; c < cols; ++c) {
        spread(matrix, toAtlantic, rows - 1, c);
    }
    for (let r = 0; r < rows - 1; ++r) {
        spread(matrix, toAtlantic, r, cols - 1);
    }
    let ret = [];
    for (let r = 0; r < rows; ++r) {
        for (let c = 0; c < cols; ++c) {
            if (toPacific[r][c] && toAtlantic[r][c]) {
                ret.push([r, c]);
            }
        }
    }
    return ret;
};

function spread(matrix, to, r, c) {
    let rows = matrix.length, cols = matrix[0].length;
    if (r > 0 && to[r - 1][c] === undefined && matrix[r - 1][c] >= matrix[r][c]) {
        to[r - 1][c] = true;
        spread(matrix, to, r - 1, c);
    }
    if (r < rows - 1 && to[r + 1][c] === undefined && matrix[r + 1][c] >= matrix[r][c]) {
        to[r + 1][c] = true;
        spread(matrix, to, r + 1, c);
    }
    if (c > 0 && to[r][c - 1] === undefined && matrix[r][c - 1] >= matrix[r][c]) {
        to[r][c - 1] = true;
        spread(matrix, to, r, c - 1);
    }
    if (c < cols - 1 && to[r][c + 1] === undefined && matrix[r][c + 1] >= matrix[r][c]) {
        to[r][c + 1] = true;
        spread(matrix, to, r, c + 1);
    }
}

module.exports = pacificAtlantic;