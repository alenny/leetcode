/**
 * @param {number} target
 * @return {number}
 */
const racecar = function (target) {
    let dp = [0, 1];
    let dpDirection = [1, 1];
    for (let t = 2; t <= target; ++t) {
        let log2 = Math.log2(t + 1);
        let ceil = Math.ceil(log2);
        if (log2 === ceil) {
            dp[t] = ceil;
            dpDirection[t] = 1;
            continue;
        }
        let remain = Math.pow(2, ceil) - 1 - t;
        dp[t] = ceil + 1 + dp[remain];
        dpDirection[t] = -dpDirection[remain];
        for (let prev = 1; prev < t; ++prev) {
            let remain = t - prev;
            let length = dp[prev] + (dpDirection[prev] <= 0 ? 1 : 2) + dp[remain];
            if (length < dp[t]) {
                dp[t] = length;
                dpDirection[t] = dpDirection[remain];
            } else if (length === dp[t] && dpDirection[t] !== dpDirection[remain]) {
                dpDirection[t] = 0;
            }
        }
    }
    return dp[target];
};

module.exports = racecar;