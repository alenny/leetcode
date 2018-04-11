const MOD_FACTOR = Math.pow(10, 9) + 7;

/**
 * @param {number} m
 * @param {number} n
 * @param {number} N
 * @param {number} i
 * @param {number} j
 * @return {number}
 */
const findPaths = function (m, n, N, i, j) {
    let cache = [];
    for (let r = 0; r < Math.ceil(m / 2); ++r) {
        cache[r] = [];
        for (let c = 0; c < Math.ceil(n / 2); ++c) {
            cache[r][c] = [0];
        }
    }
    for (let steps = 1; steps <= N; ++steps) {
        getPathCount(cache, m, n, steps, i, j);
    }
    let paths = 0;
    let cacheCoords = getCacheCoords(m, n, cache.length, cache[0].length, i, j);
    cache[cacheCoords[0]][cacheCoords[1]].forEach(count => paths = (paths + count) % MOD_FACTOR);
    return paths;
};

function getCacheCoords(rows, cols, cacheRows, cacheCols, r, c) {
    if (r >= cacheRows) {
        r = rows - 1 - r;
    }
    if (c >= cacheCols) {
        c = cols - 1 - c;
    }
    return [r, c];
}

function getPathCount(cache, rows, cols, steps, r, c) {
    let cacheCoords = getCacheCoords(rows, cols, cache.length, cache[0].length, r, c);
    r = cacheCoords[0];
    c = cacheCoords[1];
    let cacheItem = cache[r][c];
    if (cacheItem[steps] !== undefined) {
        return cacheItem[steps];
    }
    cacheItem[steps] = 0;
    if (steps === 1) {
        if (r === 0) {
            ++cacheItem[steps];
        }
        if (c === 0) {
            ++cacheItem[steps];
        }
        if (r === rows - 1) {
            ++cacheItem[steps];
        }
        if (c === cols - 1) {
            ++cacheItem[steps];
        }
    } else {
        if (r > 0) {
            cacheItem[steps] = (cacheItem[steps] + getPathCount(cache, rows, cols, steps - 1, r - 1, c)) % MOD_FACTOR;
        }
        if (r < rows - 1) {
            cacheItem[steps] = (cacheItem[steps] + getPathCount(cache, rows, cols, steps - 1, r + 1, c)) % MOD_FACTOR;
        }
        if (c > 0) {
            cacheItem[steps] = (cacheItem[steps] + getPathCount(cache, rows, cols, steps - 1, r, c - 1)) % MOD_FACTOR;
        }
        if (c < cols - 1) {
            cacheItem[steps] = (cacheItem[steps] + getPathCount(cache, rows, cols, steps - 1, r, c + 1)) % MOD_FACTOR;
        }
    }
    return cacheItem[steps];
}

module.exports = findPaths;