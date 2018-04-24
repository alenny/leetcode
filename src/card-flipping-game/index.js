/**
 * @param {number[]} fronts
 * @param {number[]} backs
 * @return {number}
 */
const flipgame = function (fronts, backs) {
    let candidates = new Set(), removed = new Set();
    for (let i = 0; i < fronts.length; ++i) {
        if (fronts[i] === backs[i]) {
            candidates.delete(fronts[i]);
            removed.add(fronts[i]);
            continue;
        }
        if (!removed.has(fronts[i])) {
            candidates.add(fronts[i]);
        }
        if (!removed.has(backs[i])) {
            candidates.add(backs[i]);
        }
    }
    let min = Number.POSITIVE_INFINITY;
    for (let n of candidates.keys()) {
        min = Math.min(min, n);
    }
    return min !== Number.POSITIVE_INFINITY ? min : 0;
};

module.exports = flipgame;