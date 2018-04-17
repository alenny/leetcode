/**
 * @param {number} maxChoosableInteger
 * @param {number} desiredTotal
 * @return {boolean}
 */
const canIWin = function (maxChoosableInteger, desiredTotal) {
    if (desiredTotal <= 0) {
        return true;
    }
    let choiceSum = (1 + maxChoosableInteger) * maxChoosableInteger / 2;
    if (choiceSum < desiredTotal) {
        return false;
    }
    let cache = new Map();
    let used = new Array(maxChoosableInteger + 1);
    used.fill(0);
    return winHelper(desiredTotal, used, cache) === 1;
};

function winHelper(desiredTotal, used, cache) {
    let usedKey = usedToKey(used);
    let subCache = cache.get(usedKey);
    if (!subCache) {
        subCache = [];
        cache.set(usedKey, subCache);
    }
    if (subCache[desiredTotal] !== undefined) {
        return subCache[desiredTotal];
    }
    let result = 0;
    for (let choice = used.length - 1; choice > 0; --choice) {
        if (used[choice]) {
            continue;
        }
        if (choice >= desiredTotal) {
            result = 1;
            break;
        }
        used[choice] = 1;
        let nextResult = winHelper(desiredTotal - choice, used, cache);
        used[choice] = 0;
        if (!nextResult) {
            result = 1;
            break;
        }
    }
    subCache[desiredTotal] = result;
    return result;
}

function usedToKey(used) {
    let key = 0;
    for (let i = 0; i < used.length; ++i) {
        key |= (used[i] << i);
    }
    return key;
}

module.exports = canIWin;