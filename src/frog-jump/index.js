/**
 * @param {number[]} stones
 * @return {boolean}
 */
const canCross = function (stones) {
    return canNext(stones, stones.length - 1, 0);
};

function canNext(stones, idx, k) {
    if (idx === 0) {
        return k <= 1;
    }
    for (let ni = idx - 1; ni >= 0; --ni) {
        let nk = stones[idx] - stones[ni];
        if (k > 0 && nk !== k && nk !== k - 1 && nk !== k + 1) {
            continue;
        }
        if (canNext(stones, ni, nk)) {
            return true;
        }
    }
    return false;
}

module.exports = canCross;