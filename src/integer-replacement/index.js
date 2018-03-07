/**
 * @param {number} n
 * @return {number}
 */
const integerReplacement = function (n) {
    let steps = 0;
    while (n > 1) {
        if ((n & 1) === 0) {
            n /= 2; // use n/=2 instead of n>>=1 to avoid overflow
        } else {
            let countOne = 0;
            let tn = n;
            while (tn > 0 && (tn & 1) === 1) {
                ++countOne;
                tn >>= 1;
            }
            n = countOne >= 3 || countOne === 2 && n > 3 ? n + 1 : n - 1;
        }
        ++steps;
    }
    return steps;
};

module.exports = integerReplacement;