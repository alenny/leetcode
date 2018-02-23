/**
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotalRecursive = function (triangle) {
    let status = { minSum: Number.POSITIVE_INFINITY };
    sumHelper(triangle, 0, 0, [], status);
    return status.minSum;
};

function sumHelper(triangle, currRow, currSum, selectedIndices, status) {
    if (currRow === triangle.length) {
        status.minSum = Math.min(status.minSum, currSum);
        return;
    }
    let prevIndex = selectedIndices.length > 0 ? selectedIndices[selectedIndices.length - 1] : 0;
    for (let currIndex = prevIndex; currIndex <= Math.min(prevIndex + 1, triangle[currRow].length - 1); ++currIndex) {
        selectedIndices.push(currIndex);
        sumHelper(triangle, currRow + 1, currSum + triangle[currRow][currIndex], selectedIndices, status);
        selectedIndices.pop();
    }
}

const minimumTotal = function (triangle) {
    let levels = triangle.length;
    let sumUp = triangle[levels - 1].slice();
    let level = levels - 1;
    while (level > 0) {
        for (let i = 0; i < level; ++i) {
            sumUp[i] = triangle[level - 1][i] + Math.min(sumUp[i], sumUp[i + 1]);
        }
        --level;
    }
    return sumUp[0];
};

module.exports = minimumTotal;