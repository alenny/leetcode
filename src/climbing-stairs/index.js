/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    const tempResults = new Array(n);
    tempResults[1] = 1;
    tempResults[2] = 2;
    for (let i = 3; i <= n; ++i) {
        tempResults[i] = tempResults[i - 1] + tempResults[i - 2];
    }
    return tempResults[n];
};

module.exports = climbStairs;