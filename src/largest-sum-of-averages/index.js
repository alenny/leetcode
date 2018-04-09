/**
 * @param {number[]} A
 * @param {number} K
 * @return {number}
 */
const largestSumOfAveragesRecursive = function (A, K) {
    let sums = [0], sum = 0;
    for (let a of A) {
        sum += a;
        sums.push(sum);
    }
    return findLargest(sums, K, 0, 0);
};

function findLargest(sums, k, beginIndex, currSum) {
    if (k === 1) {
        return currSum + (sums[sums.length - 1] - sums[beginIndex]) / (sums.length - 1 - beginIndex);
    }
    let maxSum = Number.NEGATIVE_INFINITY;
    for (let endIndex = beginIndex; endIndex < sums.length - k; ++endIndex) {
        let groupAverage = (sums[endIndex + 1] - sums[beginIndex]) / (endIndex - beginIndex + 1);
        let finalSum = findLargest(sums, k - 1, endIndex + 1, currSum + groupAverage);
        if (finalSum > maxSum) {
            maxSum = finalSum;
        }
    }
    return maxSum;
}

const largestSumOfAverages = function (A, K) {
    let sums = [0], sum = 0;
    for (let a of A) {
        sum += a;
        sums.push(sum);
    }
    // dp[ki][ac] is the result for the first ac numbers in A when K=ki
    let dp = [];
    for (let ki = 1; ki <= K; ++ki) {
        dp[ki] = [];
        dp[ki][ki] = sums[ki];
    }
    for (let ac = 2; ac <= A.length - K + 1; ++ac) {
        dp[1][ac] = sums[ac] / ac;
    }
    for (let ki = 2; ki <= K; ++ki) {
        if (ki === K) {
            dp[ki][A.length] = calMaxSum(sums, dp, ki, A.length);
            break;
        }
        for (let ac = ki + 1; ac <= Math.min(A.length - (K - ki), A.length); ++ac) {
            dp[ki][ac] = calMaxSum(sums, dp, ki, ac);
        }
    }
    return dp[K][A.length];
};

function calMaxSum(sums, dp, ki, ac) {
    let maxSum = Number.NEGATIVE_INFINITY;
    for (let prev = ki - 1; prev <= ac - 1; ++prev) {
        maxSum = Math.max(maxSum, dp[ki - 1][prev] + (sums[ac] - sums[prev]) / (ac - prev));
    }
    return maxSum;
}

module.exports = largestSumOfAverages;