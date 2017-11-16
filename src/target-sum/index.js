/**
 * @param {number[]} numbers
 * @param {number} s
 * @return {number}
 */
const findTargetSumWays1 = function (numbers, s) {
    return sumHelper(numbers, numbers.length, s);
};

function sumHelper(numbers, length, s) {
    if (length === 1) {
        let count = 0;
        if (numbers[0] === s) {
            ++count;
        }
        if (-numbers[0] === s) {
            ++count;
        }
        return count;
    }
    let lengthNext = length - 1;
    let n = numbers[lengthNext];
    return sumHelper(numbers, lengthNext, s + n) + sumHelper(numbers, lengthNext, s - n);
}

///////////////////////////////////////////

// sum(P) - sum(N) = target
// sum(P) + sum(N) + sum(P) - sum(N) = target + sum(P) + sum(N)
// 2 * sum(P) = target + sum(numbers)
// sum(P) = (target + sum(numbers)) / 2
// So we only need to find all subsets P whose sum is (target + sum(numbers)) / 2

const findTargetSumWays = function (numbers, s) {
    let numberSum = 0;
    for (let n of numbers) {
        numberSum += n;
    }
    if (s > numberSum) {
        return 0;
    }
    let sum = numberSum + s;
    // target + sum(numbers) must be even
    if (sum & 1 === 1) {
        return 0;
    }
    return subsetSum1D(numbers, sum >> 1);
};

function subsetSum1D(numbers, sum) {
    let count = 0;
    let dp = new Array(sum + 1);
    dp[0] = 1;
    for (let j = 1; j <= sum; ++j) {
        dp[j] = 0;
    }
    for (let n of numbers) {
        for (let j = sum; j >= n; --j) {
            dp[j] += dp[j - n];
        }
    }
    return dp[sum];
}

module.exports = findTargetSumWays;