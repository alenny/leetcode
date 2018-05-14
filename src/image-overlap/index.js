/**
 * @param {number[][]} A
 * @param {number[][]} B
 * @return {number}
 */
const largestOverlap = function (A, B) {
    let rows = A.length, cols = A[0].length;
    let maxOverlap = 0;
    for (let r = 0; r < rows; ++r) {
        for (let c = 0; c < cols; ++c) {
            maxOverlap = Math.max(maxOverlap, calOverlap(A, B, r, c));
        }
    }
    return maxOverlap;
};

function calOverlap(A, B, vr, vc) {
    let overlaps = [0, 0, 0, 0], rows = A.length, cols = A[0].length;
    for (let r = 0; r < rows; ++r) {
        for (let c = 0; c < cols; ++c) {
            if (A[r][c] === 0) {
                continue;
            }
            if (vr + r < rows && vc + c < cols && B[vr + r][vc + c] === 1) {
                ++overlaps[0];
            }
            if (vr + r < rows && vc + c - cols >= 0 && B[vr + r][vc + c - cols] === 1) {
                ++overlaps[1];
            }
            if (vr + r - rows >= 0 && vc + c - cols >= 0 && B[vr + r - rows][vc + c - cols] === 1) {
                ++overlaps[2];
            }
            if (vr + r - rows >= 0 && vc + c < cols && B[vr + r - rows][vc + c] === 1) {
                ++overlaps[3];
            }
        }
    }
    return Math.max(...overlaps);
}

module.exports = largestOverlap;