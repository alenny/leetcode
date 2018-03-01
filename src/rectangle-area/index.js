/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
const computeArea = function (A, B, C, D, E, F, G, H) {
    let area1 = (C - A) * (D - B);
    let area2 = (G - E) * (H - F);
    let total = area1 + area2;
    let x0 = Math.max(A, E);
    let x1 = Math.min(C, G);
    let y0 = Math.max(B, F);
    let y1 = Math.min(D, H);
    if (x0 < x1 && y0 < y1) {
        total -= (x1 - x0) * (y1 - y0);
    }
    return total;
};

module.exports = computeArea;