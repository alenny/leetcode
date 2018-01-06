/**
 * @param {number[]} heights
 * @return {number}
 */
const largestRectangleAreaDP2D = function (heights) {
    if (!heights || heights.length === 0) {
        return 0;
    }
    // dp[i][j] stores the max rectangle area starting exactly at i and ending exactly at j
    let dp = new Array(heights.length);
    let maxArea = 0;
    for (let i = 0; i < dp.length; ++i) {
        dp[i] = new Array(heights.length);
        dp[i][i] = heights[i];
        if (maxArea < dp[i][i]) {
            maxArea = dp[i][i];
        }
    }
    for (let i = 0; i < heights.length; ++i) {
        for (let j = i + 1; j < heights.length; ++j) {
            let prevRectHeight = dp[i][j - 1] / (j - i);
            dp[i][j] = Math.min(prevRectHeight, heights[j]) * (j - i + 1);
            if (maxArea < dp[i][j]) {
                maxArea = dp[i][j];
            }
        }
    }
    return maxArea;
};

const largestRectangleAreaDP1D = function (heights) {
    if (!heights || heights.length === 0) {
        return 0;
    }
    let dp = new Array(heights.length);
    let maxArea = 0;
    for (let i = 0; i < heights.length; ++i) {
        dp[i] = heights[i];
        if (maxArea < dp[i]) {
            maxArea = dp[i];
        }
        for (let j = i + 1; j < heights.length; ++j) {
            let prevRectHeight = dp[j - 1] / (j - i);
            dp[j] = Math.min(prevRectHeight, heights[j]) * (j - i + 1);
            if (maxArea < dp[j]) {
                maxArea = dp[j];
            }
        }
    }
    return maxArea;
};

const largestRectangleAreaDC = function (heights) {
    if (!heights || heights.length === 0) {
        return 0;
    }
    // Divide and Conquer
    return divide(heights, 0, heights.length - 1);
};

function divide(heights, begin, end) {
    if (begin === end) {
        return heights[begin];
    }
    if (begin > end) {
        return 0;
    }
    let min = Number.POSITIVE_INFINITY, minIndex;
    for (let i = begin; i <= end; ++i) {
        if (heights[i] < min) {
            min = heights[i];
            minIndex = i;
        }
    }
    return Math.max(min * (end - begin + 1), divide(heights, begin, minIndex - 1), divide(heights, minIndex + 1, end));
}

const largestRectangleArea = function (heights) {
    if (!heights || heights.length === 0) {
        return 0;
    }
    let stack = [];
    let curr = 0;
    let maxArea = 0;
    while (curr < heights.length) {
        if (stack.length === 0 || heights[curr] >= heights[stack[stack.length - 1]]) {
            stack.push(curr++);
            continue;
        }
        let top = stack.pop();
        while (stack.length > 0 && heights[stack[stack.length - 1]] === heights[top]) {
            stack.pop();
        }
        let left = stack.length === 0 ? -1 : stack[stack.length - 1];
        let area = heights[top] * (curr - left - 1);
        if (maxArea < area) {
            maxArea = area;
        }
    }
    while (stack.length > 0) {
        let top = stack.pop();
        let left = stack.length === 0 ? -1 : stack[stack.length - 1];
        let area = heights[top] * (heights.length - left - 1);
        if (maxArea < area) {
            maxArea = area;
        }
    }
    return maxArea;
};

module.exports = largestRectangleArea;