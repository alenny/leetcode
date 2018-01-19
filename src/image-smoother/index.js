/**
 * @param {number[][]} M
 * @return {number[][]}
 */
class Cell {
    constructor(val, count) {
        this.val = val;
        this.count = count;
    }
}

function cell(M, r, c) {
    return r < 0 || r > M.length - 1 || c < 0 || c > M[0].length - 1 ?
        new Cell(0, 0) : new Cell(M[r][c], 1);
}

const imageSmoother = function (M) {
    if (!M || M.length === 0 || M[0].length === 0) {
        return M;
    }
    let rows = M.length;
    let cols = M[0].length;
    let ret = new Array(rows);
    for (let r = 0; r < rows; ++r) {
        ret[r] = new Array(cols);
        for (let c = 0; c < cols; ++c) {
            let c0 = cell(M, r, c);
            let c1 = cell(M, r, c - 1);
            let c2 = cell(M, r, c + 1);
            let c3 = cell(M, r - 1, c);
            let c4 = cell(M, r - 1, c - 1);
            let c5 = cell(M, r - 1, c + 1);
            let c6 = cell(M, r + 1, c);
            let c7 = cell(M, r + 1, c - 1);
            let c8 = cell(M, r + 1, c + 1);
            ret[r][c] = Math.floor((c0.val + c1.val + c2.val + c3.val + c4.val + c5.val + c6.val + c7.val + c8.val) / (c0.count + c1.count + c2.count + c3.count + c4.count + c5.count + c6.count + c7.count + c8.count));
        }
    }
    return ret;
};

module.exports = imageSmoother;