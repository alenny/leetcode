/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
const findLadders = function (beginWord, endWord, wordList) {
    let wordMap = makeWordMap(wordList);
    let visitedWords = new Set([beginWord]);
    let step = 2, stepWords = [];
    stepWords.push(new Map([[beginWord, new Set()]]));
    while (step <= wordList.length + 1) {
        let results = findTarget(wordMap, stepWords[stepWords.length - 1], endWord, visitedWords);
        if (results.size === 0) {
            return [];
        }
        stepWords.push(results);
        if (results.has(endWord)) {
            return finalizeResult(stepWords, endWord, stepWords.length - 1, new Map());
        }
        ++step;
    }
    return [];
};

function findTarget(wordMap, prevWords, endWord, visitedWords) {
    let currWords = new Map(), finalWords = new Map();
    let endFound = false;
    let currStepVisitedWords = new Set();
    for (let pw of prevWords.keys()) {
        let endFoundWithThisPw = false;
        for (let idx = 0; idx < pw.length; ++idx) {
            let key = makeKey(pw, idx);
            let nextWords = wordMap.get(key);
            if (!nextWords) {
                continue;
            }
            for (let nw of nextWords) {
                if (nw === endWord) {
                    endFound = true;
                    endFoundWithThisPw = true;
                    addTargetToMap(finalWords, nw, pw);
                    break;
                }
                if (visitedWords.has(nw)) {
                    continue;
                }
                currStepVisitedWords.add(nw);
                addTargetToMap(currWords, nw, pw);
            }
            if (endFoundWithThisPw) {
                break;
            }
        }
    }
    for (let k of currStepVisitedWords.keys()) {
        visitedWords.add(k);
    }
    return endFound ? finalWords : currWords;
}

function addTargetToMap(map, word, prevWord) {
    let set = map.get(word);
    if (!set) {
        set = new Set();
        map.set(word, set);
    }
    set.add(prevWord);
}

function makeWordMap(wordList) {
    let map = new Map();
    for (let word of wordList) {
        for (let i = 0; i < word.length; ++i) {
            let key = makeKey(word, i);
            let col = map.get(key);
            if (!col) {
                map.set(key, [word]);
            } else {
                col.push(word);
            }
        }
    }
    return map;
}

function makeKey(word, i) {
    return word.substring(0, i) + '.' + word.substring(i + 1);
}

function finalizeResult(stepWords, target, step, cache) {
    if (step === 0) {
        for (let key of stepWords[0].keys()) {
            return [[key]];
        }
    }
    let ret = cache.get(target);
    if (ret) {
        return ret;
    }
    ret = [];
    let prevTargets = stepWords[step].get(target);
    for (let prevTarget of prevTargets.keys()) {
        let prevResults = finalizeResult(stepWords, prevTarget, step - 1, cache);
        for (let pr of prevResults) {
            let prCopy = pr.slice();
            prCopy.push(target);
            ret.push(prCopy);
        }
    }
    cache.set(target, ret);
    return ret;
}

module.exports = findLadders;