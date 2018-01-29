/**
 * @param {character[][]} board
 * @param {number[]} click
 * @return {character[][]}
 */
const updateBoard = function (board, click) {
    let rClick = click[0], cClick = click[1];
    if (rClick < 0 || cClick < 0 || rClick > board.length - 1 || cClick > board[0].length - 1) {
        return board;
    }
    if (board[rClick][cClick] !== 'M' && board[rClick][cClick] !== 'E') {
        return board;
    }
    if (board[rClick][cClick] === 'M') {
        board[rClick][cClick] = 'X';
        return board;
    }
    // 'E'
    let adjacentMines =
        getMine(board, rClick - 1, cClick - 1) +
        getMine(board, rClick - 1, cClick) +
        getMine(board, rClick - 1, cClick + 1) +
        getMine(board, rClick, cClick - 1) +
        getMine(board, rClick, cClick + 1) +
        getMine(board, rClick + 1, cClick - 1) +
        getMine(board, rClick + 1, cClick) +
        getMine(board, rClick + 1, cClick + 1);
    if (adjacentMines > 0) {
        board[rClick][cClick] = adjacentMines.toString();
        return board;
    }
    // set to 'B'
    board[rClick][cClick] = 'B';
    updateBoard(board, [rClick - 1, cClick - 1]);
    updateBoard(board, [rClick - 1, cClick]);
    updateBoard(board, [rClick - 1, cClick + 1]);
    updateBoard(board, [rClick, cClick - 1]);
    updateBoard(board, [rClick, cClick + 1]);
    updateBoard(board, [rClick + 1, cClick - 1]);
    updateBoard(board, [rClick + 1, cClick]);
    updateBoard(board, [rClick + 1, cClick + 1]);
    return board;
};

function getMine(board, r, c) {
    return r < 0 || c < 0 || r > board.length - 1 || c > board[0].length - 1 || board[r][c] !== 'M' ? 0 : 1;
}

module.exports = updateBoard;