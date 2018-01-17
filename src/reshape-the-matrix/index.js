/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function (nums, r, c) {
    let rows = nums.length;
    if (rows === 0) {
        return nums;
    }
    let cols = nums[0].length;
    if (rows * cols !== r * c) {
        return nums;
    }
    let ret = new Array(r);
    let pos = 0;
    for (let i = 0; i < rows; ++i) {
        for (let j = 0; j < cols; ++j) {
            let newI = Math.floor(pos / c);
            let newJ = pos % c;
            if (!ret[newI]) {
                ret[newI] = new Array(c);
            }
            ret[newI][newJ] = nums[i][j];
            ++pos;
        }
    }
    return ret;
};

module.exports = matrixReshape;