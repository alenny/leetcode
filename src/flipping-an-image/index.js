/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const flipAndInvertImage = function (A) {
    let ret = [];
    let rows = A.length, cols = A[0].length;
    for (let r = 0; r < rows; ++r) {
        ret[r] = [];
        for (let c = 0; c < cols; ++c) {
            ret[r][c] = 1 - A[r][cols - c - 1];
        }
    }
    return ret;
};

module.exports = flipAndInvertImage;