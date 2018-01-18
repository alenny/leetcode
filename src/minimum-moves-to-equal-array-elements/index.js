/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves = function (nums) {
    // Note: the min of nums should be increased in every round
    // So: min + round = ((n - 1) * round + sum) / n
    // ==> round = sum - min * n
    let sum = 0;
    let min = Number.POSITIVE_INFINITY;
    for (let num of nums) {
        if (num < min) {
            min = num;
        }
        sum += num;
    }
    return sum - min * nums.length;
};

module.exports = minMoves;