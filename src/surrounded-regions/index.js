/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const solve = function (board) {
    if (board.length === 0 || board[0].length === 0) {
        return;
    }
    let visited = new Array(board.length);
    for (let r = 0; r < board.length; ++r) {
        visited[r] = new Array(board[0].length);
        visited[r].fill(false);
    }
    for (let c = 0; c < board[0].length; ++c) {
        spreadO(board, visited, 0, c);
        spreadO(board, visited, board.length - 1, c);
    }
    for (let r = 0; r < board.length; ++r) {
        spreadO(board, visited, r, 0);
        spreadO(board, visited, r, board[0].length - 1);
    }
    for (let r = 1; r < board.length - 1; ++r) {
        for (let c = 1; c < board[0].length - 1; ++c) {
            if (!visited[r][c]) {
                board[r][c] = 'X';
            }
        }
    }
};

function spreadO(board, visited, r, c) {
    if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || visited[r][c]) {
        return;
    }
    visited[r][c] = true;
    if (board[r][c] === 'X') {
        return;
    }
    spreadO(board, visited, r - 1, c);
    spreadO(board, visited, r, c - 1);
    spreadO(board, visited, r, c + 1);
    spreadO(board, visited, r + 1, c);
}

module.exports = solve;