/**
 * @constructor
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    this.internalNumArray = nums;
    this.cache = {};
    for (var idx = 0; idx < nums.length; ++idx) {
        this.cache[idx] = {};
    }
};

/**
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if (this.cache[i][j]) {
        return this.cache[i][j];
    }
    var sum = 0;
    for (var idx = i; idx <= j; ++idx) {
        sum += this.internalNumArray[idx];
    }
    this.cache[i][j] = sum;  
    return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var numArray = new NumArray(nums);
 * numArray.sumRange(0, 1);
 * numArray.sumRange(0, 2);
 */

module.exports = NumArray;

