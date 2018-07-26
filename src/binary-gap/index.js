/**
 * @param {number} N
 * @return {number}
 */
const binaryGap = function (N) {
    let max = 0, findFirst = false, dist = 0;
    for (let i = 0; i < 32; ++i) {
        if (N & 1) {
            if (findFirst) {
                max = Math.max(max, dist);
            } else {
                findFirst = true;
            }
            dist = 1;
        } else {
            if (findFirst) {
                ++dist;
            }
        }
        N >>= 1;
    }
    return max;
};

module.exports = binaryGap;