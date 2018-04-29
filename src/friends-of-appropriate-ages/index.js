/**
 * @param {number[]} ages
 * @return {number}
 */
const numFriendRequestsDirect = function (ages) {
    let total = 0;
    ages.sort((a, b) => b - a);
    for (let i = 0; i < ages.length - 1; ++i) {
        for (let j = i + 1; j < ages.length; ++j) {
            if (ages[i] / 2 + 7 < ages[j]) {
                total += ages[i] === ages[j] ? 2 : 1;
            }
        }
    }
    return total;
};

const numFriendRequests = function (ages) {
    ages.sort((a, b) => a - b);
    let left = 0, right = 1, total = 0;
    while (left < ages.length - 1) {
        let max = 2 * (ages[left] - 7);
        total += right - left - 1;
        let sameIdx = left + 1;
        while (sameIdx < right && ages[sameIdx] === ages[left]) {
            ++sameIdx;
        }
        total += sameIdx - left - 1;
        while (right < ages.length && ages[right] < max) {
            total += ages[right] === ages[left] ? 2 : 1;
            ++right;
        }
        ++left;
        right = Math.max(left + 1, right);
    }
    return total;
};

module.exports = numFriendRequests;