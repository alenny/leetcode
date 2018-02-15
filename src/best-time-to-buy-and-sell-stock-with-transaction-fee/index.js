/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */
const maxProfit = function (prices, fee) {
    if (prices.length === 0) {
        return 0;
    }
    let lows = [];
    let highs = [];
    let direction = 0; // -1: down, 1: up, 0: unknown
    for (let i = 0; i < prices.length - 1; ++i) {
        if (prices[i] < prices[i + 1] && direction !== 1) {
            lows.push(prices[i]);
            direction = 1;
        } else if (prices[i] > prices[i + 1] && direction === 1) {
            highs.push(prices[i]);
            direction = -1;
        }
    }
    if (direction === 1) {
        highs.push(prices[prices.length - 1]);
    }
    if (lows.length === 0) {
        return 0;
    }
    let preLow = lows[0], preHigh = highs[0];
    let i = 1, total = 0;
    while (i < lows.length) {
        if (lows[i] < preHigh - fee) {
            if (preHigh - preLow - fee > 0) {
                total += preHigh - preLow - fee;
            }
            [preLow, preHigh] = [lows[i], highs[i]];
        } else if (preLow <= lows[i]) {
            preHigh = Math.max(preHigh, highs[i]);
        } else {
            [preLow, preHigh] = [lows[i], highs[i]];
        }
        ++i;
    }
    if (preHigh - preLow - fee > 0) {
        total += preHigh - preLow - fee;
    }
    return total;
};

module.exports = maxProfit;