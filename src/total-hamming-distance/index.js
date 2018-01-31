/**
 * @param {number[]} nums
 * @return {number}
 */
const totalHammingDistance = function (nums) {
    let bitOneCounts = new Array(32);
    bitOneCounts.fill(0);
    for (let num of nums) {
        let mask = 1;
        for (let i = 0; i < 32; ++i) {
            if (num & mask) {
                ++bitOneCounts[i];
            }
            mask <<= 1;
        }
    }
    let totalDistance = 0;
    for (let count of bitOneCounts) {
        totalDistance += count * (nums.length - count);
    }
    return totalDistance;
};

module.exports = totalHammingDistance;