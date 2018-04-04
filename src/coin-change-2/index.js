/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
const change2D = function (amount, coins) {
    let dp = new Array(coins.length + 1);
    for (let r = 0; r <= coins.length; ++r) {
        dp[r] = new Array(amount + 1);
    }
    dp[0].fill(0);
    dp[0][0] = 1;
    for (let r = 1; r <= coins.length; ++r) {
        dp[r][0] = 1;
        for (let amt = 1; amt <= amount; ++amt) {
            dp[r][amt] = dp[r - 1][amt];
            for (let coinSum = coins[r - 1]; coinSum <= amt; coinSum += coins[r - 1]) {
                dp[r][amt] += dp[r - 1][amt - coinSum];
            }
        }
    }
    return dp[coins.length][amount];
};

const change = function (amount, coins) {
    let dp = new Array(amount + 1);
    dp.fill(0);
    dp[0] = 1;
    for (let r = 1; r <= coins.length; ++r) {
        for (let amt = amount; amt >= 1; --amt) {
            for (let coinSum = coins[r - 1]; coinSum <= amt; coinSum += coins[r - 1]) {
                dp[amt] += dp[amt - coinSum];
            }
            if (r === coins.length) {
                break;
            }
        }
    }
    return dp[amount];
};

module.exports = change;