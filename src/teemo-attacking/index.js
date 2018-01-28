/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
const findPoisonedDuration = function (timeSeries, duration) {
    if (timeSeries.length === 0 || duration === 0) {
        return 0;
    }
    let totalDuration = 0;
    for (let i = 1; i < timeSeries.length; ++i) {
        totalDuration += Math.min(duration, timeSeries[i] - timeSeries[i - 1]);
    }
    totalDuration += duration;
    return totalDuration;
};

module.exports = findPoisonedDuration;

