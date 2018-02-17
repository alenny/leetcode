/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isValidSudoku = function (board) {
    let rows = new Array(9), cols = new Array(9), blocks = new Array(9);
    for (let i = 0; i < 9; ++i) {
        rows[i] = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
        cols[i] = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
        blocks[i] = new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9']);
    }
    for (let r = 0; r < 9; ++r) {
        for (let c = 0; c < 9; ++c) {
            if (board[r][c] === '.') {
                continue;
            }
            let blockIdx = Math.floor(r / 3) * 3 + Math.floor(c / 3);
            if (!rows[r].has(board[r][c]) || !cols[c].has(board[r][c]) || !blocks[blockIdx].has(board[r][c])) {
                return false;
            }
            rows[r].delete(board[r][c]);
            cols[c].delete(board[r][c]);
            blocks[blockIdx].delete(board[r][c]);
        }
    }
    return true;
};

module.exports = isValidSudoku;