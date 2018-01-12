/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubstring = function (s, k) {
    if (k <= 1) {
        return s.length;
    }
    let map = new Map();
    for (let i = 0; i < s.length; ++i) {
        let indices = map.get(s[i]);
        if (!indices) {
            map.set(s[i], [i]);
        } else {
            indices.push(i);
        }
    }
    let separators = [];
    let kvs = Array.from(map.entries());
    for (let kv of kvs) {
        if (kv[1].length < k) {
            for (let idx of kv[1]) {
                separators.push(idx);
            }
            map.delete(kv[0]);
        }
    }
    if (separators.length === 0) {
        return s.length;    // all characters appears no less than k times
    }
    separators.sort((a, b) => a - b);
    return findBySeparators(s, k, 0, s.length - 1, separators, map);
};

function findLongest(s, k, left, right, map) {
    if (right - left + 1 < k) {
        return 0;
    }
    let passed = new Set();
    for (let i = left; i <= right; ++i) {
        if (passed.has(s[i])) {
            continue;
        }
        let indices = map.get(s[i]);
        let indicesInside = [];
        for (let index of indices) {
            if (index < left) {
                continue;
            }
            if (index > right) {
                break;
            }
            indicesInside.push(index);
        }
        if (indicesInside.length < k) {
            return findBySeparators(s, k, left, right, indicesInside, map);
        }
        passed.add(s[i]);
    }
    return right - left + 1;
}

function findBySeparators(s, k, left, right, separators, map) {
    let maxLength = findLongest(s, k, left, separators[0] - 1, map);
    for (let i = 0; i < separators.length - 1; ++i) {
        if (separators[i + 1] - separators[i] - 1 < Math.max(1, maxLength)) {
            continue;
        }
        maxLength = Math.max(maxLength, findLongest(s, k, separators[i] + 1, separators[i + 1] - 1, map));
    }
    return Math.max(maxLength, findLongest(s, k, separators[separators.length - 1] + 1, right, map));
}

module.exports = longestSubstring;