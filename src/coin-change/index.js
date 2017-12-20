/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChangeDirect = function (coins, amount) {
    coins.sort();
    let cache = new Map();
    return coinsChangeDirectHelper(coins, coins.length - 1, amount, cache);
};

function coinsChangeDirectHelper(coins, endIdx, amount, cache) {
    if (amount === 0) {
        return 0;
    }
    let lastUsableIdx = endIdx;
    while (lastUsableIdx >= 0 && coins[lastUsableIdx] > amount) {
        --lastUsableIdx;
    }
    if (lastUsableIdx < 0) {
        return -1;
    }
    let subCache = cache.get(lastUsableIdx);
    if (subCache) {
        let min = subCache.get(amount);
        if (min) {
            return min;
        }
    }
    let min = -1;
    for (let i = lastUsableIdx; i >= 0; --i) {
        let num = coinsChangeDirectHelper(coins, i, amount - coins[i], cache);
        if (num === -1) {
            continue;
        }
        ++num;
        if (min === -1 || num < min) {
            min = num;
        }
    }
    subCache = cache.get(lastUsableIdx);
    if (!subCache) {
        subCache = new Map();
        cache.set(lastUsableIdx, subCache);
    }
    subCache.set(amount, min);
    return min;
}

const coinChange = function (coins, amount) {
    // DP
    // dp[i] stores the min number of coins for amount i or amount+1 if no solution
    let dp = new Array(amount + 1);
    dp.fill(amount + 1);
    dp[0] = 0;
    for (let am = 1; am <= amount; ++am) {
        for (let c = 0; c < coins.length; ++c) {
            if (coins[c] > am) {
                continue;
            }
            dp[am] = Math.min(dp[am], 1 + dp[am - coins[c]]);
        }
    }
    return dp[amount] > amount ? -1 : dp[amount];
};

module.exports = coinChange;