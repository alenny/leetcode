/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function (s, words) {
    let originMap = createMap(words);
    let mapEntries = Array.from(originMap.entries());
    let wordLen = words[0].length;
    let len = words.length * wordLen;
    let start = 0;
    let ret = new Set();
    let map = new Map(mapEntries);
    while (start <= s.length - len) {
        if (ret.has(start)) {
            ++start;
            continue;
        }
        let left = start;
        let idx = left;
        while (left <= s.length - len) {
            while (idx < left + len) {
                if (!findSub(s, idx, map, wordLen)) {
                    break;
                }
                idx += wordLen;
            }
            if (map.size > 0) {
                break;
            }
            ret.add(left);
            recoverSub(s, left, map, wordLen);
            left += wordLen;
        }
        map = new Map(mapEntries);
        ++start;
    }
    return Array.from(ret.keys());
};

function createMap(words) {
    let map = new Map();
    for (let w of words) {
        let count = map.get(w);
        map.set(w, count ? count + 1 : 1);
    }
    return map;
}

function recoverSub(s, idx, map, wordLen) {
    let sub = s.substr(idx, wordLen);
    let count = map.get(sub);
    map.set(sub, count ? count + 1 : 1);
}

function findSub(s, idx, map, wordLen) {
    let sub = s.substr(idx, wordLen);
    let count = map.get(sub);
    if (!count) {
        return false;
    }
    if (--count === 0) {
        map.delete(sub);
    } else {
        map.set(sub, count);
    }
    return true;
}

module.exports = findSubstring;