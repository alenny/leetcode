/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNumber = function (nums) {
    let result = 0;
    for (let n of nums) {
        result ^= n;
    }
    return result;
};

module.exports = singleNumber;