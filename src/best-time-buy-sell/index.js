/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfitUsingArrays = function (prices) {
    if (!prices || prices.length < 2) {
        return 0;
    }
    // State machine and DP
    // 3 states: resting, havingStock, selling
    // Each array stores the max profit in the possible state on day i 
    let resting = new Array(prices.length);
    let havingStock = new Array(prices.length);
    let selling = new Array(prices.length);
    resting[0] = 0;
    havingStock[0] = -prices[0];
    selling[0] = 0;
    for (let i = 1; i < prices.length; ++i) {
        resting[i] = Math.max(resting[i - 1], selling[i - 1]);
        havingStock[i] = Math.max(resting[i - 1] - prices[i], havingStock[i - 1]);
        selling[i] = havingStock[i - 1] + prices[i];
    }
    return Math.max(resting[prices.length - 1], selling[prices.length - 1]);
};

const maxProfit = function (prices) {
    if (!prices || prices.length < 2) {
        return 0;
    }
    // Simplified from arrays to constant spaces
    resting = 0;
    havingStock = -prices[0];
    selling = 0;
    for (let i = 1; i < prices.length; ++i) {
        let prevSelling = selling;
        selling = havingStock + prices[i];
        havingStock = Math.max(resting - prices[i], havingStock);
        resting = Math.max(resting, prevSelling);
    }
    return Math.max(resting, selling);
};

module.exports = maxProfit;

