/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
const SIZE = 9;
const BLOCK_SIZE = 3;
const NUMS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
const solveSudoku = function (board) {
    let rows = new Array(SIZE), cols = new Array(SIZE), blocks = new Array(SIZE);
    for (let i = 0; i < SIZE; ++i) {
        rows[i] = new Set(NUMS);
        cols[i] = new Set(NUMS);
        blocks[i] = new Set(NUMS);
    }
    for (let r = 0; r < SIZE; ++r) {
        for (let c = 0; c < SIZE; ++c) {
            if (board[r][c] === '.') {
                continue;
            }
            let blockIdx = getBlockIndex(r, c);
            rows[r].delete(board[r][c]);
            cols[c].delete(board[r][c]);
            blocks[blockIdx].delete(board[r][c]);
        }
    }
    solveIt(board, rows, cols, blocks, 0, 0);
};

function solveIt(board, rows, cols, blocks, r, c) {
    if (r === -1 && c === -1) {
        return true;
    }
    let nextPos = getNextPos(r, c);
    if (board[r][c] !== '.') {
        return solveIt(board, rows, cols, blocks, nextPos[0], nextPos[1]);
    }
    let blockIdx = getBlockIndex(r, c);
    let numsLeftInRow = Array.from(rows[r]);
    for (let num of numsLeftInRow) {
        if (!cols[c].has(num) || !blocks[blockIdx].has(num)) {
            continue;
        }
        rows[r].delete(num);
        cols[c].delete(num);
        blocks[blockIdx].delete(num);
        board[r][c] = num;
        if (solveIt(board, rows, cols, blocks, nextPos[0], nextPos[1])) {
            return true;
        }
        board[r][c] = '.';
        rows[r].add(num);
        cols[c].add(num);
        blocks[blockIdx].add(num);
    }
    return false;
}

function getNextPos(r, c) {
    if (c < SIZE - 1) {
        return [r, c + 1];
    }
    return r === SIZE - 1 ? [-1, -1] : [r + 1, 0];
}

function getBlockIndex(r, c) {
    return Math.floor(r / BLOCK_SIZE) * BLOCK_SIZE + Math.floor(c / BLOCK_SIZE);
}

module.exports = solveSudoku;