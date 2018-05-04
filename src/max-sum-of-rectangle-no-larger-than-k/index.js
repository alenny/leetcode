/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
const maxSumSubmatrix = function (matrix, k) {
    let result = getSumsFromTopLeft(matrix);
    if (result[0]) {
        return k;
    }
    let sums = result[1];
    let max = Number.NEGATIVE_INFINITY;
    for (let ltr = 0; ltr < sums.length; ++ltr) {
        for (let ltc = 0; ltc < sums[0].length; ++ltc) {
            for (let rbr = ltr; rbr < sums.length; ++rbr) {
                for (let rbc = ltc; rbc < sums[0].length; ++rbc) {
                    let sum = sums[rbr][rbc];
                    if (ltr > 0) {
                        sum -= sums[ltr - 1][rbc];
                    }
                    if (ltc > 0) {
                        sum -= sums[rbr][ltc - 1];
                    }
                    if (ltr > 0 && ltc > 0) {
                        sum += sums[ltr - 1][ltc - 1];
                    }
                    if (sum === k) {
                        return k;
                    }
                    if (sum > max && sum <= k) {
                        max = sum;
                    }
                }
            }
        }
    }
    return max;
};

function getSumsFromTopLeft(matrix, k) {
    let sums = [], rows = matrix.length, cols = matrix[0].length;
    sums[0] = [matrix[0][0]];
    for (let r = 1; r < rows; ++r) {
        sums[r] = [sums[r - 1][0] + matrix[r][0]];
        if (sums[r][0] === k) {
            return [true, undefined];
        }
    }
    for (let c = 1; c < cols; ++c) {
        sums[0][c] = sums[0][c - 1] + matrix[0][c];
        if (sums[0][c] === k) {
            return [true, undefined];
        }
    }
    for (let r = 1; r < rows; ++r) {
        for (let c = 1; c < cols; ++c) {
            sums[r][c] = sums[r - 1][c] + sums[r][c - 1] - sums[r - 1][c - 1] + matrix[r][c];
            if (sums[r][c] === k) {
                return [true, undefined];
            }
        }
    }
    return [false, sums];
}

module.exports = maxSumSubmatrix;