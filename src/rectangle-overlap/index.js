/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
const isRectangleOverlap = function (rec1, rec2) {
    // let rec1 be always left
    if (rec1[0] > rec2[0]) {
        [rec1, rec2] = [rec2, rec1];
    }
    if (rec2[0] >= rec1[2]) {
        return false;
    }
    return rec2[1] >= rec1[1] && rec2[1] < rec1[3] ||
        rec2[3] > rec1[1] && rec2[3] <= rec1[3] ||
        rec2[3] >= rec1[3] && rec2[1] <= rec1[1];
};

module.exports = isRectangleOverlap;