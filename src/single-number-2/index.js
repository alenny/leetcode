/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
    const bitCounts = new Array(32);
    bitCounts.fill(0);
    for (let n of nums) {
        for (let i = 0; i < 32; ++i) {
            bitCounts[i] += n & 1;
            n >>= 1;
        }
    }
    let result = 0;
    for (let i = 31; i >= 0; --i) {
        result <<= 1;
        result |= bitCounts[i] % 3;
    }
    return result;
};

module.exports = singleNumber;