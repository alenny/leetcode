/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const gameOfLife = function (board) {
    if (board.length === 0 || board[0].length === 0) {
        return;
    }
    let prevRow = new Array(board[0].length);
    prevRow.fill(0);
    for (let r = 0; r < board.length; ++r) {
        let leftCellValue = 0;
        let rowOldValues = board[r].slice();
        for (let c = 0; c < board[0].length; ++c) {
            let livingNeighbors = getStatePrevRow(prevRow, c - 1) +
                getStatePrevRow(prevRow, c) +
                getStatePrevRow(prevRow, c + 1) +
                leftCellValue +
                getState(board, r, c + 1) +
                getState(board, r + 1, c - 1) +
                getState(board, r + 1, c) +
                getState(board, r + 1, c + 1);
            leftCellValue = board[r][c];
            if (board[r][c] === 0 && livingNeighbors === 3) {
                board[r][c] = 1;
            } else if (livingNeighbors < 2 || livingNeighbors > 3) {
                board[r][c] = 0;
            }
        }
        prevRow = rowOldValues;
    }
};

function getStatePrevRow(prevRow, c) {
    return c < 0 || c >= prevRow.length ? 0 : prevRow[c];
}

function getState(board, r, c) {
    return r < 0 || r >= board.length || c < 0 || c >= board[0].length ? 0 : board[r][c];
}

module.exports = gameOfLife;