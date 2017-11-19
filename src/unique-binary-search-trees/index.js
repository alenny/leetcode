/**
 * @param {number} n
 * @return {number}
 */
const numTrees = function (n) {
    let matrix = new Array(n);
    for (let i = 0; i < n; ++i) {
        matrix[i] = new Array(n);
        matrix[i][i] = 1;
    }
    for (let scope = 1; scope < n; ++scope) {
        for (let from = 0; from < n - scope; ++from) {
            let to = from + scope;
            let subCount = 0;
            for (let root = from; root <= to; ++root) {
                let left = root > from ? matrix[from][root - 1] : 1;
                let right = root < to ? matrix[root + 1][to] : 1;
                subCount += left * right;
            }
            matrix[from][to] = subCount;
        }
    }
    return matrix[0][n - 1];
};

module.exports = numTrees;