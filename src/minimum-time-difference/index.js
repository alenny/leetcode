/**
 * @param {string[]} timePoints
 * @return {number}
 */
const findMinDifference = function (timePoints) {
    timePoints.sort();
    let minDiff = Number.POSITIVE_INFINITY;
    let firstTime = getTimeInMinutes(timePoints[0]);
    let prevTime = firstTime;
    let diff;
    let i = 1;
    while (true) {
        if (i === timePoints.length) {
            i = 0;
        }
        let currTime = getTimeInMinutes(timePoints[i]);
        if (i === 0) {
            currTime += 24 * 60;
        }
        diff = currTime - prevTime;
        if (diff < minDiff) {
            minDiff = diff;
        }
        if (i === 0) {
            break;
        }
        prevTime = currTime;
        ++i;
    }
    return minDiff;
};

function getTimeInMinutes(timeStr) {
    let parts = timeStr.split(':');
    return Number.parseInt(parts[0]) * 60 + Number.parseInt(parts[1]);
}

module.exports = findMinDifference;