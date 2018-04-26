/**
 * @param {string} ring
 * @param {string} key
 * @return {number}
 */
const findRotateSteps = function (ring, key) {
    let map = new Map();
    for (let i = 0; i < ring.length; ++i) {
        let indices = map.get(ring[i]);
        if (!indices) {
            map.set(ring[i], [i]);
        } else {
            indices.push(i);
        }
    }
    let cache = new Map();
    return rotate(map, key, ring.length, 0, 0, cache) + key.length;
};

function rotate(map, key, ringLength, center, ki, cache) {
    if (ki === key.length) {
        return 0;
    }
    let cacheKey = center + ',' + ki;
    let minSteps = cache.get(cacheKey);
    if (minSteps) {
        return minSteps;
    }
    minSteps = Number.POSITIVE_INFINITY;
    let indices = map.get(key[ki]);
    for (let idx of indices) {
        let distance = calDistance(ringLength, center, idx);
        let nextSteps = rotate(map, key, ringLength, idx, ki + 1, cache);
        minSteps = Math.min(minSteps, distance + nextSteps);
    }
    cache.set(cacheKey, minSteps);
    return minSteps;
}

function calDistance(length, i0, i1) {
    if (i0 > i1) {
        [i0, i1] = [i1, i0];
    }
    return Math.min(i1 - i0, length - i1 + i0);
}

module.exports = findRotateSteps;