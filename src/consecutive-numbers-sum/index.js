/**
 * @param {number} N
 * @return {number}
 */
const consecutiveNumbersSum = function (N) {
    let total = 1;
    for (let parts = 2; parts <= N; ++parts) {
        let result = N / parts;
        let half = parts >> 1;
        if (Math.ceil(result) - half < 1) {
            break;
        }
        if ((parts & 1) === 1 && Math.floor(result) === result ||
            (parts & 1) === 0 && result - Math.floor(result) === 0.5) {
            ++total;
        }
    }
    return total;
};

module.exports = consecutiveNumbersSum;