/**
 * @param {number[]} nums
 * @return {number}
 */
const rob = function (nums) {
    const maxIncludeCache = new Array(nums.length);
    maxIncludeCache[0] = 0;
    maxIncludeCache[1] = nums[0];
    maxIncludeCache[2] = nums[1];
    const n = nums.length;
    if (n < 2) {
        return maxIncludeN(nums, n, maxIncludeCache);
    }
    if (n === 2) {
        return Math.max(nums[0], nums[1]);
    }
    const valN = nums[n - 1];
    return Math.max(
        maxIncludeN(nums, n - 1, maxIncludeCache),
        maxIncludeN(nums, n - 2, maxIncludeCache) + valN,
        maxIncludeN(nums, n - 3, maxIncludeCache) + valN);
};

// maxIncludeN returns the max amount of the n houses including the #(n-1) house.
// cache stores the same thing.
const maxIncludeN = function (nums, n, cache) {
    if (cache[n] !== undefined) {
        return cache[n];
    }
    cache[n] = Math.max(
        maxIncludeN(nums, n - 2, cache),
        maxIncludeN(nums, n - 3, cache))
        + nums[n - 1];
    return cache[n];
};

module.exports = rob;