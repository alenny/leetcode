/**
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const kthGrammar = function (N, K) {
    --K;    // indexed from 0
    if (K < 2) {
        return K;
    }
    // Note, we can prove:
    // 1. The first half of any row M should be the same as the whole row M-1
    // 2. The second half of any row should be the reverse of the first half of the same row
    let toReverse = false;
    while (K >= 2) {
        let prevRowIdx = Math.ceil(Math.log2(K + 1)) - 1;   // indexed from 0
        K -= (1 << prevRowIdx);
        toReverse = !toReverse;
    }
    return toReverse ? 1 - K : K;
};

module.exports = kthGrammar;