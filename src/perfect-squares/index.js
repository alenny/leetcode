/**
 * @param {number} n
 * @return {number}
 */
const numSquares = function (n) {
    let sqs = [];
    // dp[i] is the least square number for sum i
    let dp = new Array(n + 1);
    dp.fill(0);
    let sq, i = 1;
    while ((sq = i * i) <= n) {
        sqs.push(sq);
        dp[sq] = 1;
        ++i;
    }
    if (dp[n] !== 0) {
        return dp[n];
    }
    for (let num = 2; num <= n; ++num) {
        if (dp[num] != 0) {
            continue;
        }
        let least = num;
        for (i = 0; i < sqs.length && sqs[i] <= num; ++i) {
            let count = dp[sqs[i]] + dp[num - sqs[i]];
            if (count < least) {
                least = count;
            }
        }
        dp[num] = least;
    }
    return dp[n];
};

module.exports = numSquares;