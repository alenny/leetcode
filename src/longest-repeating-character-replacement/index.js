/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function (s, k) {
    if (s.length === 0) {
        return 0;
    }
    let charCounts = new Map();
    changeCount(charCounts, s[0], 1);
    let left = 0, right = 1, longest = 1, maxCount = 1;
    while (right < s.length) {
        let count = changeCount(charCounts, s[right], 1);
        maxCount = Math.max(maxCount, count);
        if (right - left + 1 - maxCount > k) {
            longest = Math.max(longest, right - left);
            let count = changeCount(charCounts, s[left++], -1);
            // Note: no need to update maxCount when left++
            //       because it won't affect the result
        }
        ++right;
    }
    return Math.max(longest, right - left);
};

function changeCount(charCounts, char, change) {
    let count = charCounts.get(char);
    count = count ? count + change : change;
    charCounts.set(char, count);
    return count;
}

const characterReplacementByDistance = function (s, k) {
    if (s.length === 0) {
        return 0;
    }
    let map = new Map();
    let i = 0;
    while (i < s.length) {
        let start = i++;
        let char = s[start];
        while (i < s.length && s[i] === char) {
            ++i;
        }
        let col = map.get(char);
        if (!col) {
            col = [];
            map.set(char, col);
        }
        col.push([start, i - 1]);
    }
    let longest = 0;
    for (let col of map.values()) {
        for (let j = 0; j < col.length; ++j) {
            let m = j + 1;
            let kLeft = k;
            while (m < col.length && col[m][0] - col[m - 1][1] - 1 <= kLeft) {
                kLeft -= col[m][0] - col[m - 1][1] - 1;
                ++m;
            }
            longest = Math.max(longest, col[m - 1][1] - col[j][0] + 1 + kLeft);
        }
    }
    return Math.min(longest, s.length);
};

module.exports = characterReplacement;