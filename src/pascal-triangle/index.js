/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
    let ret = new Array(numRows);
    for (let i = 0; i < numRows; ++i) {
        ret[i] = new Array(i + 1);
        ret[i][0] = ret[i][i] = 1;
        for (let j = 1; j < i; ++j) {
            ret[i][j] = ret[i - 1][j - 1] + ret[i - 1][j];
        }
    }
    return ret;
};

module.exports = generate;