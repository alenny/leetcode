/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function (nums) {
    this.nums = nums;
    this.cache = [ nums[0] ];
    for (var idx = 1; idx < nums.length; ++idx) {
        this.cache[idx] = this.cache[idx - 1] + nums[idx];
    }
};

/**
 * @param {number} i
 * @param {number} val
 * @return {void}
 */
NumArray.prototype.update = function (i, val) {
    var delta = val - this.nums[i];
    this.nums[i] = val;
    for (var idx = i; idx < this.cache.length; ++idx) {
        this.cache[idx] += delta;
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function (i, j) {
    return i === 0 ? this.cache[j] : this.cache[j] - this.cache[i - 1];
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.update(1, 10);
 * numArray.sumRange(0, 2);
 */

module.exports = NumArray;