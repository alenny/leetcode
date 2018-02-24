/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
const topKFrequent = function (words, k) {
    let map = new Map();
    for (let w of words) {
        let count = map.get(w);
        map.set(w, count ? count + 1 : 1);
    }
    let pairs = Array.from(map.entries());
    sortK(pairs, k, 0, pairs.length - 1);
    let ret = new Array(k);
    for (let i = 0; i < k; ++i) {
        ret[i] = pairs[i][0];
    }
    return ret;
};

function compare(pair0, pair1) {
    if (pair0[1] > pair1[1]) {
        return -1;
    }
    if (pair0[1] < pair1[1]) {
        return 1;
    }
    return pair0[0] < pair1[0] ? -1 : 1;
}

function sortK(arr, k, begin, end) {
    if (begin >= end) {
        return;
    }
    let storeIdx = begin, scanIdx = begin;
    while (scanIdx < end) {
        if (compare(arr[scanIdx], arr[end]) < 0) {
            [arr[storeIdx], arr[scanIdx]] = [arr[scanIdx], arr[storeIdx]];
            ++storeIdx;
        }
        ++scanIdx;
    }
    [arr[storeIdx], arr[end]] = [arr[end], arr[storeIdx]];
    if (storeIdx >= k - 1) {
        sortK(arr, k, begin, storeIdx - 1);
    } else if (storeIdx < k - 1) {
        sortK(arr, k, begin, storeIdx - 1);
        sortK(arr, k, storeIdx + 1, end);
    }
}

module.exports = topKFrequent;