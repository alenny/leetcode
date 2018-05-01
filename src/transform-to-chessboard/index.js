class OneInfo {
    constructor(totalOnes, evenMissing, oddMissing) {
        this.totalOnes = totalOnes;
        this.evenMissing = evenMissing;
        this.oddMissing = oddMissing;
    }
}

/**
 * @param {number[][]} board
 * @return {number}
 */
const movesToChessboard = function (board) {
    let size = board.length;
    let oneInfoRow0 = getOneInfoOfRow(board, 0);
    if (isEven(size)) {
        if (oneInfoRow0.totalOnes !== size >> 1) {
            return -1;
        }
        let pattern1 = [];
        board[0].forEach(x => pattern1.push(x === 0 ? 1 : 0));
        return handlePatterns(board, board[0], oneInfoRow0, size >> 1, pattern1, size >> 1);
    }
    // odd size
    let pattern1 = [], halfSize = size >> 1;
    if (oneInfoRow0.totalOnes !== halfSize && oneInfoRow0.totalOnes !== halfSize + 1) {
        return -1;
    }
    board[0].forEach(x => pattern1.push(x === 0 ? 1 : 0));
    let ret = handlePatterns(board, board[0], oneInfoRow0, halfSize, pattern1, halfSize + 1);
    return ret !== -1 ? ret : handlePatterns(board, board[0], oneInfoRow0, halfSize + 1, pattern1, halfSize);
};

function handlePatterns(board, pattern0, oneInfoRow0, count0, pattern1, count1) {
    let c0 = count0, c1 = count1, size = board.length;
    for (let r = 0; r < size; ++r) {
        if (matchPattern(board[r], pattern0)) {
            --c0;
        } else if (matchPattern(board[r], pattern1)) {
            --c1;
        } else {
            return -1;
        }
    }
    if (c0 !== 0 || c1 !== 0) {
        return -1;
    }
    let oneInfoCol0 = getOneInfoOfCol(board, 0);
    if (count0 === count1) {
        return Math.min(oneInfoRow0.evenMissing, oneInfoRow0.oddMissing) +
            Math.min(oneInfoCol0.evenMissing, oneInfoCol0.oddMissing);
    }
    return (oneInfoRow0.totalOnes === size >> 1 ? oneInfoRow0.oddMissing : oneInfoRow0.evenMissing) +
        (oneInfoCol0.totalOnes === size >> 1 ? oneInfoCol0.oddMissing : oneInfoCol0.evenMissing);
}

function matchPattern(arr, pattern) {
    for (let i = 0; i < arr.length; ++i) {
        if (arr[i] !== pattern[i]) {
            return false;
        }
    }
    return true;
}

function getOneInfoOfRow(board, r) {
    let info = new OneInfo(0, 0, 0);
    for (let c = 0; c < board[r].length; ++c) {
        if (board[r][c] === 1) {
            ++info.totalOnes;
        } else if ((c & 1) === 0) {
            ++info.evenMissing;
        } else {
            ++info.oddMissing;
        }
    }
    return info;
}

function getOneInfoOfCol(board, c) {
    let info = new OneInfo(0, 0, 0);
    for (let r = 0; r < board.length; ++r) {
        if (board[r][c] === 1) {
            ++info.totalOnes;
        } else if ((r & 1) === 0) {
            ++info.evenMissing;
        } else {
            ++info.oddMissing;
        }
    }
    return info;
}

function isEven(num) {
    return (num & 1) === 0;
}

module.exports = movesToChessboard;