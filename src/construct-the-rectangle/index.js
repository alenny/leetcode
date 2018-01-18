/**
 * @param {number} area
 * @return {number[]}
 */
const constructRectangle = function (area) {
    let w = Math.floor(Math.sqrt(area));
    while (w > 1) {
        let fl = area / w;
        let l = Math.floor(fl);
        if (fl === l) {
            return [l, w];
        }
        --w;
    }
    return [area, w];
};

module.exports = constructRectangle;