/**
 * @param {string[]} deadends
 * @param {string} target
 * @return {number}
 */
const openLock = function (deadends, target) {
    // BFS
    const ZERO_CODE = '0'.charCodeAt(0);
    let deadEndSet = new Set();
    for (let deadEnd of deadends) {
        deadEndSet.add(deadEnd);
    }
    let currQueue = ['0000'];
    let visitedSet = new Set(['0000']);
    let step = 0;
    while (currQueue.length > 0) {
        let nextQueue = [];
        for (let item of currQueue) {
            if (deadEndSet.has(item)) {
                continue;
            }
            if (item === target) {
                return step;
            }
            for (let idx = 0; idx < 4; ++idx) {
                let oldDigit = item.charCodeAt(idx) - ZERO_CODE;
                let prefix = item.substring(0, idx);
                let postfix = item.substring(idx + 1);
                let newDigit = oldDigit === 9 ? 0 : oldDigit + 1;
                let newItem = prefix + newDigit + postfix;
                if (!visitedSet.has(newItem)) {
                    nextQueue.push(newItem);
                    visitedSet.add(newItem);
                }
                newDigit = oldDigit === 0 ? 9 : oldDigit - 1;
                newItem = prefix + newDigit + postfix;
                if (!visitedSet.has(newItem)) {
                    nextQueue.push(newItem);
                    visitedSet.add(newItem);
                }
            }
        }
        currQueue = nextQueue;
        ++step;
    }
    return -1;
};

module.exports = openLock;