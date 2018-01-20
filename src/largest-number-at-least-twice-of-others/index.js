/**
 * @param {number[]} nums
 * @return {number}
 */
const dominantIndex = function (nums) {
    if (!nums || nums.length === 0) {
        return -1;
    }
    if (nums.length === 1) {
        return 0;
    }
    let map = new Map();
    let max = nums[0], secondMax = Number.NEGATIVE_INFINITY;
    for (let i = 0; i < nums.length; ++i) {
        let indices = map.get(nums[i]);
        if (!indices) {
            map.set(nums[i], [i]);
        } else {
            indices.push(i);
        }
        if (nums[i] > max) {
            secondMax = max;
            max = nums[i];
        } else if (nums[i] < max && nums[i] > secondMax) {
            secondMax = nums[i];
        }
    }
    if (max < 2 * secondMax) {
        return -1;
    }
    let indicesOfLargest = map.get(max);
    return indicesOfLargest.length === 1 ? indicesOfLargest[0] : -1;
};

module.exports = dominantIndex;