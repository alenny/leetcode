/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const maxSumOfThreeSubarraysDirect = function (nums, k) {
    if (k === 0) {
        return [0, 1, 2];
    }
    let sums = calSumsK(nums, k);
    let maxSum = Number.NEGATIVE_INFINITY;
    let ret = [];
    for (let l = 0; l <= nums.length - 3 * k; ++l) {
        let sumN = Number.NEGATIVE_INFINITY, n;
        for (let m = nums.length - 2 * k; m >= l + k; --m) {
            if (sums[m + k] > sumN) {
                n = m + k;
                sumN = sums[n];
            }
            let sum = sums[l] + sums[m] + sumN;
            if (sum > maxSum) {
                maxSum = sum;
                ret = [l, m, n];
            }
        }
    }
    return ret;
};

function calSumsK(nums, k) {
    let sums = [0];
    for (let i = 0; i < k; ++i) {
        sums[0] += nums[i];
    }
    for (let i = 1; i <= nums.length - k; ++i) {
        sums[i] = sums[i - 1] + nums[i + k - 1] - nums[i - 1];
    }
    return sums;
}

const maxSumOfThreeSubarrays2D = function (nums, k) {
    if (k === 0) {
        return [0, 1, 2];
    }
    let sums = calSumsK(nums, k);
    // dp[i][j] is the max sum and indices when using i sub-arrays and the first j sums.
    let dp = new Array(4);
    for (let i = 0; i <= 3; ++i) {
        dp[i] = new Array(sums.length + 1);
        dp[i].fill({ maxSum: Number.NEGATIVE_INFINITY, idx: [] });
    }
    dp[1][1] = { maxSum: sums[0], idx: [0] };
    for (let n = 2; n <= sums.length; ++n) {
        dp[1][n] = sums[n - 1] > dp[1][n - 1].maxSum ?
            { maxSum: sums[n - 1], idx: [n - 1] } : dp[1][n - 1];
    }
    for (let i = 2; i <= 3; ++i) {
        for (let n = k * (i - 1) + 1; n <= sums.length; ++n) {
            let tmp = dp[i - 1][n - k].maxSum + sums[n - 1];
            if (tmp > dp[i][n - 1].maxSum) {
                let indices = dp[i - 1][n - k].idx.slice();
                indices.push(n - 1);
                dp[i][n] = { maxSum: tmp, idx: indices };
            } else {
                dp[i][n] = dp[i][n - 1];
            }
        }
    }
    return dp[3][sums.length].idx;
}

const maxSumOfThreeSubarrays = function (nums, k) {
    if (k === 0) {
        return [0, 1, 2];
    }
    let sums = calSumsK(nums, k);
    let prevDp = new Array(sums.length + 1);
    prevDp[1] = { maxSum: sums[0], idx: [0] };
    for (let j = 2; j <= sums.length; ++j) {
        prevDp[j] = sums[j - 1] > prevDp[j - 1].maxSum ?
            { maxSum: sums[j - 1], idx: [j - 1] } : prevDp[j - 1];
    }
    for (let i = 2; i <= 3; ++i) {
        let dp = new Array(sums.length + 1);
        dp[k * (i - 1)] = { maxSum: Number.NEGATIVE_INFINITY, idx: [] };
        for (let j = k * (i - 1) + 1; j <= sums.length; ++j) {
            let tmp = prevDp[j - k].maxSum + sums[j - 1];
            if (tmp > dp[j - 1].maxSum) {
                let indices = prevDp[j - k].idx.slice();
                indices.push(j - 1);
                dp[j] = { maxSum: tmp, idx: indices };
            } else {
                dp[j] = dp[j - 1];
            }
        }
        prevDp = dp;
    }
    return prevDp[sums.length].idx;
}

module.exports = maxSumOfThreeSubarrays;