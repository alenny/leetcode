/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findMaxAverage = function (nums, k) {
    let sum = 0;
    for (let i = 0; i < k; ++i) {
        sum += nums[i];
    }
    let maxAverage = sum / k;
    for (let i = k; i < nums.length; ++i) {
        sum = sum - nums[i - k] + nums[i];
        let average = sum / k;
        if (average > maxAverage) {
            maxAverage = average;
        }
    }
    return maxAverage;
};

module.exports = findMaxAverage;