class Boundary {
    constructor(x, low, high) {
        this.x = x;
        this.low = low;
        this.high = high;
    }
}
/**
 * @param {number[][]} rectangles
 * @return {boolean}
 */
const isRectangleCover = function (rectangles) {
    rectangles.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    let boundaries = [new Boundary(rectangles[0][0], rectangles[0][1], Number.POSITIVE_INFINITY)];
    let idx = 0;
    while (idx < rectangles.length) {
        let x = rectangles[idx][0], bi = 0, newBoundaries = [];
        while (idx < rectangles.length && rectangles[idx][0] === x && bi < boundaries.length) {
            if (boundaries[bi].x > x) {
                addToBoundaries(newBoundaries, boundaries[bi].x, boundaries[bi].low, boundaries[bi].high);
                ++bi;
                continue;
            }
            if (boundaries[bi].x < x ||
                rectangles[idx][1] !== boundaries[bi].low ||
                rectangles[idx][3] > boundaries[bi].high) {
                return false;
            }
            if (rectangles[idx][3] < boundaries[bi].high) {
                boundaries[bi].low = rectangles[idx][3];
            } else {
                ++bi;
            }
            addToBoundaries(newBoundaries, rectangles[idx][2], rectangles[idx][1], rectangles[idx][3]);
            ++idx;
        }
        if (bi === boundaries.length && idx < rectangles.length && rectangles[idx][0] === x) {
            return false;
        }
        while (bi < boundaries.length && boundaries[bi].high !== Number.POSITIVE_INFINITY) {
            addToBoundaries(newBoundaries, boundaries[bi].x, boundaries[bi].low, boundaries[bi].high);
            ++bi;
        }
        boundaries = newBoundaries;
    }
    let right = boundaries[0].x, bi = 1;
    while (bi < boundaries.length) {
        if (boundaries[bi].x !== right) {
            return false;
        }
    }
    return true;
};

function addToBoundaries(boundaries, x, low, high) {
    if (boundaries.length === 0 || x !== boundaries[boundaries.length - 1].x) {
        boundaries.push(new Boundary(x, low, high));
    } else {
        boundaries[boundaries.length - 1].high = high;
    }
}

module.exports = isRectangleCover;