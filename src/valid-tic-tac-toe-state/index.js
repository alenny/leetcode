/**
 * @param {string[]} board
 * @return {boolean}
 */
const validTicTacToe = function (board) {
    let xCount = 0, oCount = 0, xWin = false, oWin = false;
    for (let r = 0; r < 3; ++r) {
        if (board[r] === 'XXX') {
            xWin = true;
        } else if (board[r] === 'OOO') {
            oWin = true;
        }
        for (let c = 0; c < 3; ++c) {
            if (board[r][c] === 'X') {
                ++xCount;
                if (r === 2 && !xWin) {
                    xWin = checkWin(board, c);
                }
            } else if (board[r][c] === 'O') {
                ++oCount;
                if (r === 2 && !oWin) {
                    oWin = checkWin(board, c);
                }
            }
        }
    }
    return (xCount === oCount || xCount === oCount + 1) && !xWin && !oWin ||
        xCount === oCount + 1 && xWin && !oWin ||
        xCount === oCount && !xWin && oWin;
};

function checkWin(board, c) {
    return c === 1 && board[0][1] === board[2][1] && board[1][1] === board[2][1] ||
        c === 0 && (board[0][2] === board[2][0] && board[1][1] === board[2][0] || board[0][0] === board[2][0] && board[1][0] === board[2][0]) ||
        c === 2 && (board[0][0] === board[2][2] && board[1][1] === board[2][2] || board[0][2] === board[2][2] && board[1][2] === board[2][2]);
}

module.exports = validTicTacToe;