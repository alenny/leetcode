/**
 * @param {string} board
 * @param {string} hand
 * @return {number}
 */
const findMinStep = function (board, hand) {
    let handMap = new Map();
    for (let ch of hand) {
        increaseHandMap(handMap, ch, 1);
    }
    let steps = handle(board, handMap);
    return steps === Number.POSITIVE_INFINITY ? -1 : steps;
};

function handle(current, handMap) {
    if (current.length === 0) {
        return 0;
    }
    let idx = 0, minSteps = Number.POSITIVE_INFINITY;
    while (idx < current.length) {
        let begin = idx, currChar = current[begin];
        while (idx < current.length && currChar === current[idx]) {
            ++idx;
        }
        let countInHand = handMap.get(currChar);
        if (!countInHand || idx - begin + countInHand < 3) {
            continue;
        }
        let countToInsert = 3 - idx + begin;
        decreaseHandMap(handMap, currChar, countToInsert);
        let b0 = begin, e0 = idx;
        while (b0 > 0 && e0 < current.length) {
            let left = b0 - 1, right = e0;
            while (left >= 0 && current[left] === current[b0 - 1]) {
                --left;
            }
            while (right < current.length && current[right] === current[b0 - 1]) {
                ++right;
            }
            if (b0 - left - 1 + right - e0 < 3) {
                break;
            }
            b0 = left + 1;
            e0 = right;
        }
        let next = current.substring(0, b0) + current.substring(e0);
        minSteps = Math.min(minSteps, handle(next, handMap) + countToInsert);
        increaseHandMap(handMap, currChar, countToInsert);
    }
    return minSteps;
}

function increaseHandMap(handMap, ch, countToIncrease) {
    let count = handMap.get(ch);
    handMap.set(ch, count ? count + countToIncrease : countToIncrease);
}

function decreaseHandMap(handMap, ch, countToDecrease) {
    let count = handMap.get(ch);
    if (count === countToDecrease) {
        handMap.delete(ch);
    } else {
        handMap.set(ch, count - countToDecrease);
    }
}

module.exports = findMinStep;