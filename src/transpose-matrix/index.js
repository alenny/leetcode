/**
 * @param {number[][]} A
 * @return {number[][]}
 */
const transpose = function (A) {
    let ret = new Array(A[0].length);
    for (let c = 0; c < A[0].length; ++c) {
        ret[c] = [];
        for (let r = 0; r < A.length; ++r) {
            ret[c].push(A[r][c]);
        }
    }
    return ret;
};

module.exports = transpose;