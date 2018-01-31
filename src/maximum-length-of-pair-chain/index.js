/**
 * @param {number[][]} pairs
 * @return {number}
 */
const findLongestChain = function (pairs) {
    if (pairs.length === 0) {
        return 0;
    }
    pairs.sort((a, b) => a[1] === b[1] ? b[0] - a[0] : a[1] - b[1]);
    let curr = 0;
    let length = 0;
    let prevRight = Number.NEGATIVE_INFINITY;
    while (curr < pairs.length) {
        if (pairs[curr][0] > prevRight) {
            prevRight = pairs[curr][1];
            ++length;
        }
        ++curr;
    }
    return length;
};


module.exports = findLongestChain;