/**
 * @param {number} k
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit2D = function (k, prices) {
    let [highPrices, lowPrices] = findHighLowPrices(prices);
    if (highPrices.length === 0) {
        return 0;
    }
    if (k >= highPrices.length) {
        return calAllTrans(highPrices, lowPrices, 0, highPrices.length - 1);
    }
    // dp[i][j] means the max profit when k is i and we only use the first j high/low price pairs.
    let dp = new Array(k + 1);
    for (let ki = 0; ki <= k; ++ki) {
        dp[ki] = new Array(highPrices.length + 1);
        dp[ki][0] = 0;
    }
    dp[0].fill(0);
    for (let ki = 1; ki <= k; ++ki) {
        for (let pi = 1; pi <= ki; ++pi) {
            dp[ki][pi] = dp[ki - 1][pi - 1] + highPrices[pi - 1] - lowPrices[pi - 1];
        }
        for (let pi = ki + 1; pi <= highPrices.length; ++pi) {
            dp[ki][pi] = Math.max(dp[ki][pi - 1], dp[ki - 1][pi - 1] + highPrices[pi - 1] - lowPrices[pi - 1]);
            let lpi = pi - 2, lastLowPrice = lowPrices[pi - 1];
            while (lpi >= 0) {
                if (lowPrices[lpi] < lastLowPrice) {
                    dp[ki][pi] = Math.max(dp[ki][pi], dp[ki - 1][lpi] + highPrices[pi - 1] - lowPrices[lpi]);
                    lastLowPrice = lowPrices[lpi];
                }
                --lpi;
            }
        }
    }
    return dp[k][highPrices.length];
};

function findHighLowPrices(prices) {
    let highPrices = [], lowPrices = [];
    let prevTrend = 0;
    for (let i = 0; i < prices.length - 1; ++i) {
        let currTrend = prices[i + 1] - prices[i];
        if (prevTrend === 0) {
            if (prices[i] < prices[i + 1]) {
                lowPrices.push(prices[i]);
            }
            prevTrend = currTrend;
        } else if (prevTrend > 0 && currTrend < 0) {
            highPrices.push(prices[i]);
            prevTrend = currTrend;
        } else if (prevTrend < 0 && currTrend > 0) {
            lowPrices.push(prices[i]);
            prevTrend = currTrend;
        }
    }
    if (prevTrend > 0) {
        highPrices.push(prices[prices.length - 1]);
    }
    return [highPrices, lowPrices];
}

function calAllTrans(highPrices, lowPrices, begin, end) {
    let total = 0;
    for (let i = begin; i <= end; ++i) {
        total += highPrices[i] - lowPrices[i];
    }
    return total;
}

const maxProfit = function (k, prices) {
    let [highPrices, lowPrices] = findHighLowPrices(prices);
    if (highPrices.length === 0) {
        return 0;
    }
    if (k >= highPrices.length) {
        return calAllTrans(highPrices, lowPrices, 0, highPrices.length - 1);
    }
    let prevDp = new Array(highPrices.length + 1);
    prevDp.fill(0);
    for (let ki = 1; ki <= k; ++ki) {
        let dp = new Array(highPrices.length + 1);
        dp[0] = 0;
        for (let pi = 1; pi <= ki; ++pi) {
            dp[pi] = prevDp[pi - 1] + highPrices[pi - 1] - lowPrices[pi - 1];
        }
        for (let pi = ki + 1; pi <= highPrices.length; ++pi) {
            dp[pi] = Math.max(dp[pi - 1], prevDp[pi - 1] + highPrices[pi - 1] - lowPrices[pi - 1]);
            let lpi = pi - 2, lastLowPrice = lowPrices[pi - 1];
            while (lpi >= 0) {
                if (lowPrices[lpi] < lastLowPrice) {
                    dp[pi] = Math.max(dp[pi], prevDp[lpi] + highPrices[pi - 1] - lowPrices[lpi]);
                    lastLowPrice = lowPrices[lpi];
                }
                --lpi;
            }
        }
        prevDp = dp;
    }
    return prevDp[highPrices.length];
};

module.exports = maxProfit;