/**
 * @param {number} n
 * @return {number}
 */
const totalNQueens = function (n) {
    return nQueens(n, []);
};

function nQueens(n, rows) {
    if (rows.length === n) {
        return 1;
    }
    let count = 0;
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
            count += nQueens(n, rows);
            rows.pop();
        }
    }
    return count;
}

module.exports = totalNQueens;