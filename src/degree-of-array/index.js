/**
 * @param {number[]} nums
 * @return {number}
 */
const findShortestSubArray = function (nums) {
    if (!nums || nums.length === 0) {
        return 0;
    }
    let map = new Map();
    for (let i = 0; i < nums.length; ++i) {
        let indices = map.get(nums[i]);
        if (!indices) {
            map.set(nums[i], [i]);
        } else {
            indices.push(i);
        }
    }
    let maxCount = 0;
    let minLength = Number.POSITIVE_INFINITY;
    for (let indices of map.values()) {
        if (indices.length > maxCount) {
            maxCount = indices.length;
            minLength = indices[indices.length - 1] - indices[0] + 1;
        } else if (indices.length === maxCount) {
            minLength = Math.min(minLength, indices[indices.length - 1] - indices[0] + 1);
        }
    }
    return minLength;
};

module.exports = findShortestSubArray;