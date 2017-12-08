/**
 * @param {number[]} height
 * @return {number}
 */
const maxAreaNLogN = function (height) {
    let sortedHeight = [];
    for (let i = 0; i < height.length; ++i) {
        sortedHeight.push({ height: height[i], pos: i });
    }
    sortedHeight.sort((h1, h2) => h2.height - h1.height);
    let areaMax = 0;
    for (let curr = 1; curr < sortedHeight.length; ++curr) {
        let distMax = 0;
        for (let other = 0; other < curr; ++other) {
            let dist = Math.abs(sortedHeight[curr].pos - sortedHeight[other].pos);
            if (dist > distMax) {
                distMax = dist;
            }
        }
        let area = distMax * sortedHeight[curr].height;
        if (area > areaMax) {
            areaMax = area;
        }
    }
    return areaMax;
};

const maxArea = function (height) {
    let left = 0, right = height.length - 1;
    let areaMax = 0, area;
    while (left < right) {
        area = Math.min(height[left], height[right]) * (right - left);
        if (area > areaMax) {
            areaMax = area;
        }
        if (height[left] < height[right]) {
            ++left;
        } else {
            --right;
        }
    }
    return areaMax;
};

module.exports = maxArea;