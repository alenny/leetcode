/**
 * @param {number} N
 * @param {number} K
 * @param {number} r
 * @param {number} c
 * @return {number}
 */
const knightProbability = function (N, K, r, c) {
    let cache = [];
    for (let r = 0; r < N; ++r) {
        cache[r] = [];
    }
    let queue = new Map([[r, new Map([[c, 1]])]]);
    let queueLen = 1;
    let probability = 1;
    while (K > 0 && queueLen > 0) {
        let nextQueue = new Map();
        let hit = 0;
        for (let rowPair of queue.entries()) {
            let row = rowPair[0], colMap = rowPair[1];
            for (let colPair of colMap.entries()) {
                let col = colPair[0], count = colPair[1];
                let nextPos = getNextPos(cache, row, col);
                nextPos.forEach(p => {
                    let colMap = nextQueue.get(p[0]);
                    if (!colMap) {
                        colMap = new Map();
                        nextQueue.set(p[0], colMap);
                    }
                    let c = colMap.get(p[1]);
                    colMap.set(p[1], c ? c + count : count);
                });
                hit += nextPos.length * count;
            }
        }
        probability *= hit / queueLen / 8;
        queue = nextQueue;
        queueLen = hit;
        --K;
    }
    return K > 0 ? 0 : probability;
};

function getNextPos(cache, r, c) {
    if (cache[r][c] === undefined) {
        cache[r][c] = [];
        let size = cache.length;
        if (r - 1 >= 0 && c - 2 >= 0) {
            cache[r][c].push([r - 1, c - 2]);
        }
        if (r - 2 >= 0 && c - 1 >= 0) {
            cache[r][c].push([r - 2, c - 1]);
        }
        if (r - 2 >= 0 && c + 1 < size) {
            cache[r][c].push([r - 2, c + 1]);
        }
        if (r - 1 >= 0 && c + 2 < size) {
            cache[r][c].push([r - 1, c + 2]);
        }
        if (r + 1 < size && c + 2 < size) {
            cache[r][c].push([r + 1, c + 2]);
        }
        if (r + 2 < size && c + 1 < size) {
            cache[r][c].push([r + 2, c + 1]);
        }
        if (r + 2 < size && c - 1 >= 0) {
            cache[r][c].push([r + 2, c - 1]);
        }
        if (r + 1 < size && c - 2 >= 0) {
            cache[r][c].push([r + 1, c - 2]);
        }
    }
    return cache[r][c];
}

module.exports = knightProbability;