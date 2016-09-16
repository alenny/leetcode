/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.cache = { 0: nums[0] };    // cache[idx] caches sum of [0, idx]
    for (var idx = 1; idx < nums.length; ++idx) {
        this.cache[idx] = this.cache[idx - 1] + nums[idx];
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    return i === 0 ? this.cache[j] : this.cache[j] - this.cache[i - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */

module.exports = NumArray;

