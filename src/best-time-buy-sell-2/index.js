/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    if (!prices || prices.length < 2) {
        return 0;
    }
    let buyDay = 0;
    let profit = 0;
    while (buyDay < prices.length - 1) {
        if (prices[buyDay] >= prices[buyDay + 1]) {
            ++buyDay;
        }
        if (buyDay === prices.length - 1) {
            break;
        }
        let sellDay = buyDay + 1;
        while (sellDay < prices.length && prices[sellDay] >= prices[sellDay - 1]) {
            ++sellDay;
        }
        --sellDay;
        profit += prices[sellDay] - prices[buyDay];
        buyDay = sellDay + 1;
    }
    return profit;
};

module.exports = maxProfit;