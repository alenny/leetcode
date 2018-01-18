/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
const maxCount = function (m, n, ops) {
    let minR = m, minC = n;
    for (let op of ops) {
        minR = Math.min(op[0], minR);
        minC = Math.min(op[1], minC);
    }
    return minR * minC;
};

module.exports = maxCount;