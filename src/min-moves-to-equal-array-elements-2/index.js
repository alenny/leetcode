/**
 * @param {number[]} nums
 * @return {number}
 */
const minMoves2 = function (nums) {
    nums.sort((a, b) => a - b);
    let target = nums[nums.length >> 1];
    let moves = 0;
    nums.forEach(n => moves += Math.abs(target - n));
    return moves;
};

module.exports = minMoves2;