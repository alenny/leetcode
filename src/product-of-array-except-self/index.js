/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
    let result = new Array(nums.length);
    result[0] = 1;
    for (let i = 1; i < nums.length; ++i) {
        result[i] = result[i - 1] * nums[i - 1];
    }
    let rightProduct = 1;
    for (let i = nums.length - 2; i >= 0; --i) {
        rightProduct *= nums[i + 1];
        result[i] *= rightProduct;
    }
    return result;
};

module.exports = productExceptSelf;