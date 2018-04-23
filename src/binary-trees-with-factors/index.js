const MODULO = Math.pow(10, 9) + 7;

/**
 * @param {number[]} A
 * @return {number}
 */
const numFactoredBinaryTrees = function (A) {
    if (A.length === 0) {
        return 0;
    }
    A.sort((a, b) => a - b);
    // dp[i] is the count of the trees using A[i] as the root
    let dp = [1], count = 1, map = new Map([[A[0], 0]]);
    for (let idx = 1; idx < A.length; ++idx) {
        dp[idx] = 1;
        for (let j = 0; j < idx; ++j) {
            if (A[j] > Math.sqrt(A[idx])) {
                break;
            }
            if (A[idx] % A[j] > 0) {
                continue;
            }
            let divider = A[idx] / A[j];
            if (map.has(divider)) {
                dp[idx] += A[j] === divider ? dp[j] * dp[map.get(divider)] : dp[j] * dp[map.get(divider)] * 2;
            }
        }
        count = (count + dp[idx]) % MODULO;
        map.set(A[idx], idx);
    }
    return count;
};

module.exports = numFactoredBinaryTrees;