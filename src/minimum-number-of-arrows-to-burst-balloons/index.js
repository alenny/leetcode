/**
 * @param {number[][]} points
 * @return {number}
 */
const findMinArrowShots = function (points) {
    if (points.length <= 1) {
        return points.length;
    }
    points.sort((a, b) => a[1] - b[1]);
    let currRight = points[0][1];
    let count = 1;
    let curr = 1;
    while (curr < points.length) {
        if (points[curr][0] > currRight) {
            ++count;
            currRight = points[curr][1];
        }
        ++curr;
    }
    return count;
};

module.exports = findMinArrowShots;