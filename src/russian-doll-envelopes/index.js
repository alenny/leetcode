/**
 * @param {number[][]} envelopes
 * @return {number}
 */
const maxEnvelopesBackTracking = function (envelopes) {
    if (envelopes.length === 0) {
        return 0;
    }
    envelopes.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : b[0] - a[0]);
    let cache = new Map();
    return getMax(envelopes, 0, [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY], cache);
};

function getMax(envelopes, startIdx, prevEnvelope, cache) {
    let cacheKey = getCacheKey(prevEnvelope);
    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }
    let idx = startIdx, maxTotal = 0;
    while (idx < envelopes.length) {
        while (idx < envelopes.length && envelopes[idx][1] >= prevEnvelope[1]) {
            ++idx;
        }
        if (idx === envelopes.length) {
            break;
        }
        let envelope = envelopes[idx++];
        while (idx < envelopes.length && envelopes[idx][0] === envelope[0]) {
            ++idx;
        }
        let total = getMax(envelopes, idx, envelope, cache) + 1;
        maxTotal = Math.max(maxTotal, total);
    }
    cache.set(cacheKey, maxTotal);
    return maxTotal;
}

function getCacheKey(envelope) {
    return envelope[0] + ',' + envelope[1];
}

const maxEnvelopes = function (envelopes) {
    if (envelopes.length === 0) {
        return 0;
    }
    envelopes.sort((a, b) => a[0] - b[0]);
    let dp = new Array(envelopes.length);
    dp.fill(1);
    let idx = 1, max = 1;
    while (idx < envelopes.length) {
        let width = envelopes[idx][0];
        let height = envelopes[idx][1];
        for (let i = 0; i < idx; ++i) {
            if (envelopes[i][0] === width) {
                break;
            }
            if (envelopes[i][1] >= height) {
                continue;
            }
            dp[idx] = Math.max(dp[idx], 1 + dp[i]);
        }
        max = Math.max(max, dp[idx++]);
    }
    return max;
};

module.exports = maxEnvelopes;