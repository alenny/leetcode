/**
 * @param {number[]} numbers
 * @return {number}
 */
const maxProduct = function (numbers) {
    // dp[i] stores the min-product and max-product subarray ends with numbers[i]
    let dp = new Array(numbers.length);
    dp[0] = [numbers[0], numbers[0]];
    let max = dp[0][1];
    for (let i = 1; i < numbers.length; ++i) {
        let product0 = dp[i - 1][0] * numbers[i];
        let product1 = dp[i - 1][1] * numbers[i];
        dp[i] = [Math.min(product0, product1, numbers[i]), Math.max(product0, product1, numbers[i])];
        if (dp[i][1] > max) {
            max = dp[i][1];
        }
    }
    return max;
};

module.exports = maxProduct;