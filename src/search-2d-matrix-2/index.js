/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix1 = function (matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    return searchHelper(matrix, target, 0, matrix.length - 1);
};

function searchHelper(matrix, target, rowFrom, rowTo) {
    if (rowFrom > rowTo) {
        return false;
    }
    let cols = matrix[0].length;
    rowMid = (rowFrom + rowTo) >> 1;
    if (target < matrix[rowMid][0]) {
        return searchHelper(matrix, target, rowFrom, rowMid - 1);
    }
    if (target > matrix[rowMid][cols - 1]) {
        return searchHelper(matrix, target, rowMid + 1, rowTo);
    }
    if (searchInArray(matrix[rowMid], target, 0, cols - 1)) {
        return true;
    }
    return searchHelper(matrix, target, rowFrom, rowMid - 1) ||
        searchHelper(matrix, target, rowMid + 1, rowTo);
}

function searchInArray(arr, target, from, to) {
    if (from > to) {
        return false;
    }
    let mid = (from + to) >> 1;
    let midVal = arr[mid];
    if (midVal === target) {
        return true;
    }
    if (target > midVal) {
        return searchInArray(arr, target, mid + 1, to);
    }
    return searchInArray(arr, target, from, mid - 1);
}

////////////////////////////////////////////////////////////

const searchMatrix = function (matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    let rows = matrix.length;
    let cols = matrix[0].length;
    let r = 0, c = cols - 1;
    while (r < rows && c >= 0) {
        let val = matrix[r][c];
        if (val === target) {
            return true;
        }
        if (target < val) {
            --c;
            continue;
        }
        // target > val
        ++r;
    }
    return false;
};

module.exports = searchMatrix;