/**
 * @param {character[][]} board
 * @return {number}
 */
const countBattleships = function (board) {
    if (!board || board.length === 0 || board[0].length === 0) {
        return 0;
    }
    let count = 0;
    for (let r = 0; r < board.length; ++r) {
        for (let c = 0; c < board[0].length; ++c) {
            if (board[r][c] === '.') {
                continue;
            }
            if ((r > 0 && board[r - 1][c] === 'X') || (c > 0 && board[r][c - 1] === 'X')) {
                continue;
            }
            ++count;
        }
    }
    return count;
};

module.exports = countBattleships;