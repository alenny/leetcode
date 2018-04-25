/**
 * @param {number[]} nums
 * @param {number} m
 * @return {number}
 */
const splitArray = function (nums, m) {
    let sums = new Array(nums.length + 1);
    sums[0] = 0;
    for (let c = 1; c <= nums.length; ++c) {
        sums[c] = sums[c - 1] + nums[c - 1];
    }
    let dp = sums.slice();
    for (let r = 2; r <= m; ++r) {
        for (let c = nums.length; c >= r; --c) {
            let min = Number.POSITIVE_INFINITY;
            for (let prev = r - 1; prev < c; ++prev) {
                min = Math.min(min, Math.max(dp[prev], sums[c] - sums[prev]));
            }
            dp[c] = min;
        }
    }
    return dp[nums.length];
};

module.exports = splitArray;