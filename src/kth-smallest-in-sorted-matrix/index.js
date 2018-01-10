/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const kthSmallest = function (matrix, k) {
    let n = matrix.length;
    let sorted = partition(matrix, 0, n - 1);
    return sorted[k - 1];
};

function partition(matrix, startRow, stopRow) {
    if (startRow === stopRow) {
        return matrix[startRow];
    }
    let midRow = (startRow + stopRow) >> 1;
    let ret0 = partition(matrix, startRow, midRow);
    let ret1 = partition(matrix, midRow + 1, stopRow);
    return merge(ret0, ret1);
}

function merge(arr0, arr1) {
    let ret = [];
    let i0 = 0, i1 = 0;
    while (i0 < arr0.length && i1 < arr1.length) {
        if (arr0[i0] <= arr1[i1]) {
            ret.push(arr0[i0++]);
        } else {
            ret.push(arr1[i1++]);
        }
    }
    while (i0 < arr0.length) {
        ret.push(arr0[i0++]);
    }
    while (i1 < arr1.length) {
        ret.push(arr1[i1++]);
    }
    return ret;
}

module.exports = kthSmallest;