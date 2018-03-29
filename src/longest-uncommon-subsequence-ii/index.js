/**
 * @param {string[]} strs
 * @return {number}
 */
const findLUSlength = function (strs) {
    if (strs.length === 0) {
        return 0;
    }
    let strMap = new Map();
    for (let str of strs) {
        let count = strMap.get(str);
        strMap.set(str, count ? count + 1 : 1);
    }
    let keys = Array.from(strMap.keys());
    keys.sort((a, b) => b.length - a.length);
    let idx = 0;
    while (idx < keys.length) {
        let count = strMap.get(keys[idx]);
        if (count > 1) {
            ++idx;
            continue;
        }
        let foundParent = false;
        for (let pi = 0; pi < idx; ++pi) {
            if (isSubSequence(keys[idx], keys[pi])) {
                foundParent = true;
                break;
            }
        }
        if (!foundParent) {
            return keys[idx].length;
        }
        ++idx;
    }
    return -1;
};

function isSubSequence(small, big) {
    let si = 0, bi = 0;
    while (si < small.length && bi < big.length) {
        if (small[si] === big[bi]) {
            ++si;
            ++bi;
        } else {
            ++bi;
        }
    }
    return si === small.length;
}

module.exports = findLUSlength;