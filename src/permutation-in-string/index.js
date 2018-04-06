/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const checkInclusion = function (s1, s2) {
    if (s1.length > s2.length) {
        return false;
    }
    let countMap = new Map();
    for (let char of s1) {
        let count = countMap.get(char);
        countMap.set(char, count ? count + 1 : 1);
    }
    let idx = 0, lengthCounted = 0;
    let left = idx;
    while (idx < s2.length) {
        while (idx < s2.length) {
            let count = countMap.get(s2[idx]);
            if (!count) {
                break;
            }
            countMap.set(s2[idx], count - 1);
            if (++lengthCounted === s1.length) {
                return true;
            }
            ++idx;
        }
        if (idx === s2.length) {
            return false;
        }
        if (!countMap.has(s2[idx])) {
            while (left < idx) {
                countMap.set(s2[left], countMap.get(s2[left]) + 1);
                --lengthCounted;
                ++left;
            }
            while (idx < s2.length && !countMap.has(s2[idx])) {
                ++idx;
            }
            if (idx === s2.length) {
                return false;
            }
            left = idx;
            continue;
        }
        while (s2[left] !== s2[idx]) {
            countMap.set(s2[left], countMap.get(s2[left]) + 1);
            --lengthCounted;
            ++left;
        }
        ++left;
        ++idx;
    }
    return false;
};

module.exports = checkInclusion;