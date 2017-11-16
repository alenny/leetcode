/**
 * @param {number[]} numbers
 * @return {boolean}
 */
const canPartition = function (numbers) {
    let sum = 0;
    for (let n of numbers) {
        sum += n;
    }
    if (sum & 1) {
        return false;   // odd sum does not have solution
    }
    sum >>= 1;
    //return subsetSum2D(numbers, sum);
    return subsetSum1D(numbers, sum);
};

// https://discuss.leetcode.com/topic/67539/0-1-knapsack-detailed-explanation
function subsetSum2D(numbers, sum) {
    let dp = new Array(numbers.length + 1);
    // Init the dp matrix
    for (let i = 0; i <= numbers.length; ++i) {
        dp[i] = new Array(sum + 1);
    }
    for (let i = 0; i <= numbers.length; ++i) {
        dp[i][0] = true;
    }
    for (let j = 1; j <= sum; ++j) {
        dp[0][j] = false;
    }
    for (let i = 1; i <= numbers.length; ++i) {
        for (let j = 1; j <= sum; ++j) {
            dp[i][j] = dp[i - 1][j];
            if (j >= numbers[i - 1]) {
                dp[i][j] = dp[i][j] || dp[i - 1][j - numbers[i - 1]];
            }
        }
    }
    return dp[numbers.length][sum];
}

function subsetSum1D(numbers, sum) {
    let dp = new Array(sum + 1);
    dp[0] = true;
    for (let j = 1; j <= sum; ++j) {
        dp[j] = false;
    }
    for (let n of numbers) {
        for (let j = sum; j >= n; --j) {
            dp[j] = dp[j] || dp[j - n];
        }
    }
    return dp[sum];
}

module.exports = canPartition;