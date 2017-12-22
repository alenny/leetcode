/**
 * @param {number[]} numbers
 * @return {number}
 */
const maxCoinsDirect = function (numbers) {
    if (!numbers) {
        return 0;
    }
    let cache = new Array(numbers.length);
    for (let i = 0; i < numbers.length; ++i) {
        cache[i] = new Array(numbers.length);
    }
    return maxCoinsDirectHelper(numbers, 0, numbers.length - 1, cache);
};

function maxCoinsDirectHelper(numbers, left, right, cache) {
    if (left > right) {
        return 0;
    }
    if (cache[left][right]) {
        return cache[left][right];
    }
    let max = 0;
    for (let i = left; i <= right; ++i) {
        let amount = maxCoinsDirectHelper(numbers, left, i - 1, cache) + maxCoinsDirectHelper(numbers, i + 1, right, cache) + calCoins(numbers, left - 1, i, right + 1);
        if (amount > max) {
            max = amount;
        }
    }
    cache[left][right] = max;
    return max;
}

function calCoins(numbers, ...indexes) {
    let ret = 1;
    for (let idx of indexes) {
        if (idx >= 0 && idx < numbers.length) {
            ret *= numbers[idx];
        }
    }
    return ret;
}

const maxCoins = function (numbers) {
    // dp[i][j] (i<=j) stores the max coins when we burst only from i-1 to j-1
    let dp = new Array(numbers.length + 2);
    for (let i = 0; i < dp.length; ++i) {
        dp[i] = new Array(numbers.length + 2);
        dp[i].fill(0);
    }
    for (let i = 1; i <= numbers.length; ++i) {
        dp[i][i] = calCoins(numbers, i - 2, i - 1, i);
    }
    for (let distance = 1; distance < numbers.length; ++distance) {
        for (let i = 1; i <= numbers.length - distance; ++i) {
            let j = i + distance;
            let max = 0;
            for (let burst = i; burst <= j; ++burst) {
                let amount = dp[i][burst - 1] + dp[burst + 1][j] + calCoins(numbers, i - 2, burst - 1, j);
                if (amount > max) {
                    max = amount;
                }
            }
            dp[i][j] = max;
        }
    }
    return dp[1][numbers.length];   // burst from 0 to numbers.length-1
};

module.exports = maxCoins;