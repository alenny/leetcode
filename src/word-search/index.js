/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function (board, word) {
    if (!board || board.length === 0 || board[0].length === 0) {
        return false;
    }
    let used = new Array(board.length);
    for (let r = 0; r < used.length; ++r) {
        used[r] = new Array(board[0].length);
    }
    for (let r = 0; r < board.length; ++r) {
        for (let c = 0; c < board[0].length; ++c) {
            if (board[r][c] !== word[0]) {
                continue;
            }
            for (let r = 0; r < used.length; ++r) {
                used[r].fill(false);
            }
            if (existDirectHelper(board, used, r, c, word, 0)) {
                return true;
            }
        }
    }
    return false;
};

function existDirectHelper(board, used, r, c, word, idx) {
    if (idx >= word.length) {
        return true;
    }
    if (r < 0 || r >= board.length || c < 0 || c >= board[0].length || used[r][c] || board[r][c] !== word[idx]) {
        return false;
    }
    used[r][c] = true;
    ++idx;
    if (existDirectHelper(board, used, r - 1, c, word, idx) || existDirectHelper(board, used, r + 1, c, word, idx) || existDirectHelper(board, used, r, c - 1, word, idx) || existDirectHelper(board, used, r, c + 1, word, idx)) {
        return true;
    }
    used[r][c] = false;
    return false;
}

const existUsingMap = function (board, word) {
    if (!board || board.length === 0 || board[0].length === 0) {
        return false;
    }
    let charMap = new Map();
    for (let r = 0; r < board.length; ++r) {
        for (let c = 0; c < board[0].length; ++c) {
            let rowMap = charMap.get(board[r][c]);
            if (!rowMap) {
                rowMap = new Map();
                charMap.set(board[r][c], rowMap);
            }
            let colSet = rowMap.get(r);
            if (!colSet) {
                colSet = new Set();
                rowMap.set(r, colSet);
            }
            colSet.add(c);
        }
    }
    let used = new Array(board.length);
    for (let r = 0; r < used.length; ++r) {
        used[r] = new Array(board[0].length);
    }
    let firstCharRows = charMap.get(word[0]);
    if (!firstCharRows) {
        return false;
    }
    for (let r of firstCharRows.keys()) {
        for (let c of firstCharRows.get(r)) {
            for (let r = 0; r < used.length; ++r) {
                used[r].fill(false);
            }
            if (existUsingMapHelper(charMap, used, r, c, word, 0)) {
                return true;
            }
        }
    }
    return false;
};

function existUsingMapHelper(charMap, used, row, col, word, wordIdx) {
    if (wordIdx >= word.length) {
        return true;
    }
    if (row < 0 || row >= used.length || col < 0 || col >= used[0].length || used[row][col]) {
        return false;
    }
    let rowMap = charMap.get(word[wordIdx]);
    if (!rowMap) {
        return false;
    }
    let colSet = rowMap.get(row);
    if (!colSet || !colSet.has(col)) {
        return false;
    }
    used[row][col] = true;
    ++wordIdx;
    if (existUsingMapHelper(charMap, used, row - 1, col, word, wordIdx) ||
        existUsingMapHelper(charMap, used, row + 1, col, word, wordIdx) ||
        existUsingMapHelper(charMap, used, row, col - 1, word, wordIdx) ||
        existUsingMapHelper(charMap, used, row, col + 1, word, wordIdx)) {
        return true;
    }
    used[row][col] = false;
    return false;
}

module.exports = exist;