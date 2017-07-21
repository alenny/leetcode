/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    if (!prices) {
        return 0;
    }
    let low, high, max = 0;
    low = high = prices[0];
    for (let i = 1; i < prices.length; ++i) {
        if (prices[i] > high) {
            high = prices[i];
            continue;
        }
        if (prices[i] < low) {
            const diff = high - low;
            if (diff > max) {
                max = diff;
            }
            low = prices[i];
            high = low;
        }
    }
    return Math.max(max, high - low);
};

module.exports = maxProfit;