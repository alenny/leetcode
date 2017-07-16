/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let distance = 0;
    let xorRet = x ^ y;
    for (let i = 0; i < 32; ++i) {
        if (xorRet & 1) {
            ++distance;
        }
        xorRet = xorRet >>> 1;
    }
    return distance;
};

module.exports = hammingDistance;