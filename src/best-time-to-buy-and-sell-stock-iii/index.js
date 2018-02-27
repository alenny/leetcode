/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
    if (prices.length < 2) {
        return 0;
    }
    let highPrices = [], lowPrices = [];
    let preTrend = 0, curr = 0;
    while (curr < prices.length - 1) {
        let currTrend = prices[curr + 1] - prices[curr];
        if (preTrend === 0) {
            // beginning
            if (currTrend > 0) {
                lowPrices.push(prices[curr]);
            }
            preTrend = currTrend;
        } else if (preTrend > 0 && currTrend < 0) {
            highPrices.push(prices[curr]);
            preTrend = currTrend;
        } else if (preTrend < 0 && currTrend > 0) {
            lowPrices.push(prices[curr]);
            preTrend = currTrend;
        }
        ++curr;
    }
    if (preTrend > 0) {
        highPrices.push(prices[curr]);
    }
    if (highPrices.length === 0 || lowPrices.length === 0) {
        return 0;
    }
    let maxProfit = 0;
    let firstBuyPrice = Number.POSITIVE_INFINITY;
    for (let firstSellIndex = 0; firstSellIndex < highPrices.length; ++firstSellIndex) {
        firstBuyPrice = Math.min(firstBuyPrice, lowPrices[firstSellIndex]);
        let firstProfit = highPrices[firstSellIndex] - firstBuyPrice;
        let secondProfit = getOneMaxTransaction(highPrices, lowPrices, firstSellIndex + 1);
        maxProfit = Math.max(maxProfit, firstProfit + secondProfit);
    }
    return maxProfit;
};

function getOneMaxTransaction(highPrices, lowPrices, startIndex) {
    if (startIndex >= lowPrices.length) {
        return 0;
    }
    let maxProfit = 0;
    let lowIdx = startIndex, highIdx = startIndex, idx = startIndex + 1;
    while (idx < lowPrices.length) {
        if (lowPrices[idx] < lowPrices[lowIdx]) {
            maxProfit = Math.max(maxProfit, highPrices[highIdx] - lowPrices[lowIdx]);
            lowIdx = highIdx = idx;
        } else if (highPrices[idx] > highPrices[highIdx]) {
            highIdx = idx;
        }
        ++idx;
    }
    return Math.max(maxProfit, highPrices[highIdx] - lowPrices[lowIdx]);
}

module.exports = maxProfit;