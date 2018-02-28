/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function (beginWord, endWord, wordList) {
    let wordMap = new Map();
    for (let w of wordList) {
        for (let i = 0; i < w.length; ++i) {
            let key = makeKey(w, i);
            let col = wordMap.get(key);
            if (!col) {
                wordMap.set(key, [w]);
            } else {
                col.push(w);
            }
        }
    }
    let visitedWords = new Set();
    let step = 1;
    let currWords = [beginWord];
    let wordsInPrevSteps = new Set();
    while (step <= wordList.length) {
        ++step;
        let nextWords = findTarget(wordMap, currWords, endWord, wordsInPrevSteps);
        if (nextWords.length === 0) {
            return 0;
        }
        if (nextWords[0] === endWord) {
            return step;
        }
        currWords = nextWords;
    }
    return 0;
};

function findTarget(wordMap, currWords, endWord, wordsInPrevSteps) {
    let nextWords = [];
    for (let w of currWords) {
        for (let i = 0; i < w.length; ++i) {
            let key = makeKey(w, i);
            let col = wordMap.get(key);
            if (!col) {
                continue;
            }
            for (let nw of col) {
                if (nw === endWord) {
                    return [nw];
                }
                if (wordsInPrevSteps.has(nw)) {
                    continue;
                }
                nextWords.push(nw);
                wordsInPrevSteps.add(nw);
            }
        }
    }
    return nextWords;
}

function makeKey(word, idx) {
    return word.substring(0, idx) + '.' + word.substring(idx + 1);
}

module.exports = ladderLength;