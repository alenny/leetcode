/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function (matrix, target) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return false;
    }
    let ret = matrixBinarySearch(matrix, target, 0, 0, matrix.length - 1, matrix[0].length - 1);
    return ret;
};

function matrixBinarySearch(matrix, target, fromRow, fromCol, toRow, toCol) {
    let rowSize = matrix[0].length;
    let fromIdx = fromRow * rowSize + fromCol;
    let toIdx = toRow * rowSize + toCol;
    if (fromIdx > toIdx) {
        return false;
    }
    let midLocation = (fromIdx + toIdx) >> 1;
    let midRow = Math.floor(midLocation / rowSize);
    let midCol = midLocation % rowSize;
    let midValue = matrix[midRow][midCol];
    if (midValue === target) {
        return true;
    }
    if (target > midValue) {
        let nextFromRow, nextFromCol;
        if (midCol === rowSize - 1) {
            nextFromRow = midRow + 1;
            nextFromCol = 0;
        } else {
            nextFromRow = midRow;
            nextFromCol = midCol + 1;
        }
        return matrixBinarySearch(matrix, target, nextFromRow, nextFromCol, toRow, toCol);
    }
    // if target < midValue
    let nextToRow, nextToCol;
    if (midCol === 0) {
        nextToRow = midRow - 1;
        nextToCol = matrix[0].length - 1;
    } else {
        nextToRow = midRow;
        nextToCol = midCol - 1;
    }
    return matrixBinarySearch(matrix, target, fromRow, fromCol, nextToRow, nextToCol);
}

module.exports = searchMatrix;