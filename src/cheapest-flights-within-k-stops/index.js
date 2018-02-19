/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} K
 * @return {number}
 */
const findCheapestPrice = function (n, flights, src, dst, K) {
    let dp = new Array(K + 1);
    for (let r = 0; r <= K; ++r) {
        dp[r] = new Array(n);
    }
    dp[0].fill(Number.POSITIVE_INFINITY);
    let edgeMap = new Map();
    // destination as the first key, source as the second key
    for (let flight of flights) {
        let subMap = edgeMap.get(flight[1]);
        if (!subMap) {
            subMap = new Map();
            edgeMap.set(flight[1], subMap);
        }
        subMap.set(flight[0], flight[2]);
        if (flight[0] === src) {
            dp[0][flight[1]] = flight[2];
        }
    }
    for (let r = 1; r <= K; ++r) {
        for (let c = 0; c < n; ++c) {
            dp[r][c] = dp[r - 1][c];
            let sources = edgeMap.get(c);
            if (!sources) {
                continue;
            }
            for (let pair of sources) {
                dp[r][c] = Math.min(dp[r][c], dp[r - 1][pair[0]] + pair[1]);
            }
        }
    }
    return dp[K][dst] === Number.POSITIVE_INFINITY ? -1 : dp[K][dst];
};

module.exports = findCheapestPrice;