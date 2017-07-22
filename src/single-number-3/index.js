/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function (nums) {
    let xorAllResult = 0;
    for (let n of nums) {
        xorAllResult ^= n;
    }
    // find one diff bit between the two results
    let diffPos;
    for (let i = 0; i < 32; ++i) {
        if (xorAllResult & 1) {
            diffPos = i
            break;
        }
        xorAllResult >>= 1;
    }
    // xor 2 groups divided by bit value on diffPos, each group has exact one result
    let xorAll0AtPos = 0, xorAll1AtPos = 0;
    for (let n of nums) {
        if ((n >> diffPos) & 1) {
            xorAll0AtPos ^= n;
        } else {
            xorAll1AtPos ^= n;
        }
    }

    return [xorAll0AtPos, xorAll1AtPos];
};

module.exports = singleNumber;