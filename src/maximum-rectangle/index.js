/**
 * @param {character[][]} matrix
 * @return {number}
 */
class Rect {
    constructor(r0, r1, c0, c1) {
        this.r0 = r0;
        this.r1 = r1;
        this.c0 = c0;
        this.c1 = c1;
        this.area = (c1 - c0 + 1) * (r1 - r0 + 1);
    }
};

const maximalRectangle = function (matrix) {
    if (!matrix || matrix.length === 0 || matrix[0].length === 0) {
        return 0;
    }
    let maxArea = 0;
    let lastRowRects = [];
    let rows = matrix.length;
    let cols = matrix[0].length;
    for (let r = 0; r < rows; ++r) {
        let start = 0;
        let currRowRects = [];
        while (start < cols) {
            while (start < cols && matrix[r][start] === '0') {
                ++start;
            }
            if (start === cols) {
                break;
            }
            let end = start + 1;
            while (end < cols && matrix[r][end] === '1') {
                ++end;
            }
            --end;
            // all '1' from start to end
            let startEndRectIncluded = false;
            for (let prevRect of lastRowRects) {
                let newC0 = Math.max(prevRect.c0, start);
                let newC1 = Math.min(prevRect.c1, end);
                if (newC1 < newC0) {
                    continue;
                }
                if (newC0 <= start && newC1 >= end) {
                    startEndRectIncluded = true;
                }
                rect = new Rect(prevRect.r0, r, newC0, newC1);
                currRowRects.push(rect);
                if (rect.area > maxArea) {
                    maxArea = rect.area;
                }
            }
            if (!startEndRectIncluded) {
                let rect = new Rect(r, r, start, end);
                currRowRects.push(rect);
                if (rect.area > maxArea) {
                    maxArea = rect.area;
                }
            }
            start = end + 1;
        }
        lastRowRects = currRowRects;
    }
    return maxArea;
};

module.exports = maximalRectangle;