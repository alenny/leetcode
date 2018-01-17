/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function (beginWord, endWord, wordList) {
    let lengthCache = new Map();
    let nextCache = new Map();
    let next = [];
    for (let word of wordList) {
        if (isOneDistance(beginWord, word)) {
            next.push(word);
        }
    }
    nextCache.set(beginWord, next);
    return getMinLength(lengthCache, nextCache, wordList, beginWord, endWord, new Set());
};

function getMinLength(lengthCache, nextCache, wordList, beginWord, endWord, wordsOnPath) {
    if (beginWord === endWord) {
        return 1;
    }
    let subLengthCache = lengthCache.get(beginWord);
    if (subLengthCache) {
        let cachedLength = subLengthCache.get(endWord);
        if (cachedLength) {
            return cachedLength;
        }
    }
    let minLength = 0;
    let next = nextCache.get(beginWord);
    if (!next) {
        next = [];
        nextCache.set(beginWord, next);
        for (let word of wordList) {
            if (isOneDistance(beginWord, word)) {
                addRelation(nextCache, beginWord, word);
            }
        }
    }
    if (next.length === 0) {
        return 0;
    }
    for (let word of next) {
        if (wordsOnPath.has(word)) {
            continue;
        }
        wordsOnPath.add(word);
        let len = getMinLength(lengthCache, nextCache, wordList, word, endWord, wordsOnPath);
        if (len > 0 && (minLength === 0 || len < minLength)) {
            minLength = len;
        }
        wordsOnPath.delete(word);
    }
    minLength = minLength === 0 ? 0 : minLength + 1;
    if (!subLengthCache) {
        subLengthCache = new Map();
        lengthCache.set(beginWord, subLengthCache);
    }
    subLengthCache.set(endWord, minLength);
    return minLength;
}

function addRelation(nextCache, a, b) {
    let coll = nextCache.get(a);
    if (!coll) {
        nextCache.set(a, [b]);
    } else {
        coll.push(b);
    }
}

function isOneDistance(a, b) {
    let diff = 0;
    for (let i = 0; i < a.length; ++i) {
        if (a[i] != b[i]) {
            ++diff;
        }
    }
    return diff === 1;
}

module.exports = ladderLength;