/**
 * @param {number} n
 * @return {number}
 */
const countPrimes = function (n) {
    if (n <= 2) {
        return 0;
    }
    let count = 0;
    let notPrime = new Array(n + 1);
    notPrime.fill(false);
    for (let i = 2; i < n; ++i) {
        if (!notPrime[i]) {
            ++count;
        }
        for (let j = i; j <= n / i; ++j) {
            notPrime[i * j] = true;
        }
    }
    return count;
};

module.exports = countPrimes;