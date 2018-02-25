/**
 * @param {number} n
 * @return {string[][]}
 */
const solveNQueens = function (n) {
    let ret = [];
    nQueens(n, ret, []);
    return ret;
};

function nQueens(n, ret, rows) {
    if (rows.length === n) {
        ret.push(printResult(rows));
        return;
    }
    let availableCols = new Array(n);
    availableCols.fill(true);
    for (let r = 0; r < rows.length; ++r) {
        let col = rows[r];
        availableCols[col] = false;
        let diff = rows.length - r;
        if (col - diff >= 0) {
            availableCols[col - diff] = false;
        }
        if (col + diff < n) {
            availableCols[col + diff] = false;
        }
    }
    for (let c = 0; c < n; ++c) {
        if (availableCols[c]) {
            rows.push(c);
            nQueens(n, ret, rows);
            rows.pop();
        }
    }
}

function printResult(rows) {
    let ret = [], len = rows.length;
    for (let col of rows) {
        let cols = new Array(len);
        cols.fill('.');
        cols[col] = 'Q';
        ret.push(cols.join(''));
    }
    return ret;
}

module.exports = solveNQueens;