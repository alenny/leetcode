/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
const validSquare = function (p1, p2, p3, p4) {
    if (p1[0] === p2[0] && p1[1] === p2[1]) {
        return false;
    }
    let pts = [p1, p2, p3, p4];
    pts.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : a[0] - b[0]);
    if (pts[0][0] === pts[1][0] || pts[2][0] === pts[3][0] || pts[0][1] === pts[2][1] || pts[1][1] === pts[3][1]) {
        return pts[0][0] === pts[1][0] && pts[2][0] === pts[3][0] && pts[0][1] === pts[2][1] && pts[1][1] === pts[3][1]
            && pts[3][0] - pts[0][0] === pts[1][1] - pts[0][1];
    }
    let diagonalSquare = distanceSquare(pts[0], pts[3]);
    let distSquare01 = distanceSquare(pts[0], pts[1]);
    let distSquare13 = distanceSquare(pts[1], pts[3]);
    if (distSquare01 !== distSquare13 || distSquare01 + distSquare13 !== diagonalSquare) {
        return false;
    }
    let distSquare02 = distanceSquare(pts[0], pts[2]);
    let distSquare23 = distanceSquare(pts[2], pts[3]);
    return distSquare02 === distSquare23 && distSquare02 + distSquare23 === diagonalSquare;
};

function distanceSquare(p1, p2) {
    return (p2[0] - p1[0]) * (p2[0] - p1[0]) + (p2[1] - p1[1]) * (p2[1] - p1[1]);
}

module.exports = validSquare;