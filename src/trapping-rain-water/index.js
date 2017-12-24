/**
 * @param {number[]} height
 * @return {number}
 */
class HeightInfo {
    constructor(height, index) {
        this.height = height;
        this.index = index;
    }
};

const trap = function (height) {
    if (!height || height.length < 3) {
        return 0;
    }
    let sortedHeight = [];
    for (let i = 0; i < height.length; ++i) {
        sortedHeight.push(new HeightInfo(height[i], i));
    }
    sortedHeight.sort((a, b) => b.height - a.height);
    return calArea(height, sortedHeight, 1, 0, sortedHeight[0].index, false) +
        calArea(height, sortedHeight, 1, sortedHeight[0].index, height.length - 1, true);
};

function calArea(height, sortedHeight, sortedIndex, left, right, isLeftHigh) {
    if (left >= right - 1) {
        return 0;
    }
    while (sortedHeight[sortedIndex].index < left || sortedHeight[sortedIndex].index > right) {
        ++sortedIndex;
    }
    let high = sortedHeight[sortedIndex];
    let higherIndex = isLeftHigh ? left : right;
    let newLeft = Math.min(high.index, higherIndex);
    let newRight = Math.max(high.index, higherIndex);
    let area = 0;
    for (let i = newLeft + 1; i < newRight; ++i) {
        area += high.height - height[i];
    }
    ++sortedIndex;
    area += calArea(height, sortedHeight, sortedIndex, left, newLeft, isLeftHigh) + calArea(height, sortedHeight, sortedIndex, newRight, right, isLeftHigh);
    return area;
}

module.exports = trap;