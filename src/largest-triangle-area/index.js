/**
 * @param {number[][]} points
 * @return {number}
 */
const largestTriangleArea = function (points) {
    let maxArea = 0;
    for (let i0 = 0; i0 < points.length; ++i0) {
        for (let i1 = i0 + 1; i1 < points.length; ++i1) {
            for (let i2 = i1 + 1; i2 < points.length; ++i2) {
                maxArea = Math.max(maxArea, calArea(points[i0], points[i1], points[i2]));
            }
        }
    }
    return maxArea;
};

function calArea(p0, p1, p2) {
    return Math.abs(p0[0] * (p1[1] - p2[1]) + p1[0] * (p2[1] - p0[1]) + p2[0] * (p0[1] - p1[1])) / 2;
}

module.exports = largestTriangleArea;