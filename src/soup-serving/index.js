/**
 * @param {number} N
 * @return {number}
 */
const soupServingsDP = function (N) {
    // let 1 unit be 25ml
    let alignedN = Math.floor((N - 1) / 25) + 1;
    let ops = [[4, 0], [3, 1], [2, 2], [1, 3]];
    // dp[a][b] is the probabilities of [A empty first, AB empty together] when we have a units of A and b units of B
    let dp = new Array(alignedN + 1);
    for (let a = 0; a <= alignedN; ++a) {
        dp[a] = new Array(alignedN + 1);
        dp[a][0] = [0, 0];
    }
    dp[0].fill([1, 0]);
    dp[0][0] = [0, 1];
    for (let sum = 2; sum <= alignedN * 2; ++sum) {
        for (let a = Math.max(1, sum - alignedN); a <= Math.min(alignedN, sum - 1); ++a) {
            let b = sum - a;
            dp[a][b] = [0, 0];
            for (let op of ops) {
                let aLeft = a - op[0], bLeft = b - op[1];
                if (aLeft <= 0 && bLeft <= 0) {
                    dp[a][b][1] += 0.25;
                } else if (aLeft <= 0) {
                    dp[a][b][0] += 0.25;
                } else if (bLeft > 0) {
                    dp[a][b][0] += dp[aLeft][bLeft][0] * 0.25;
                    dp[a][b][1] += dp[aLeft][bLeft][1] * 0.25;
                }
            }
        }
    }
    return dp[alignedN][alignedN][0] + dp[alignedN][alignedN][1] * 0.5;
};

const soupServings = function (N) {
    // let 1 unit be 25ml
    let alignedN = Math.floor((N - 1) / 25) + 1;
    let ops = [[4, 0], [3, 1], [2, 2], [1, 3]];
    let result = soupHelper(alignedN, alignedN, ops, new Map());
    return result[0] + result[1] * 0.5;
};

function soupHelper(a, b, ops, cache) {
    if (a <= 0 && b <= 0) {
        return [0, 1];
    }
    if (a <= 0) {
        return [1, 0];
    }
    if (b <= 0) {
        return [0, 0];
    }
    let cacheKey = a + '|' + b;
    let cachedRet = cache.get(cacheKey);
    if (cachedRet) {
        return cachedRet;
    }
    let ret = [0, 0];
    for (let op of ops) {
        let nextRet = soupHelper(a - op[0], b - op[1], ops, cache);
        ret[0] += nextRet[0] / ops.length;
        ret[1] += nextRet[1] / ops.length;
    }
    cache.set(cacheKey, ret);
    return ret;
}

module.exports = soupServings;