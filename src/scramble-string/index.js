/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const isScramble = function (s1, s2) {
    return helper(s1, 0, s1.length - 1, s2, 0, s2.length - 1);
};

function helper(s1, b1, e1, s2, b2, e2) {
    if (b1 === e1 && b2 === b2) {
        return s1[b1] === s2[b2];
    }
    let mapFromLeft = new Map();
    let mapFromRight = new Map();
    let curr1 = b1;
    let left2 = b2, right2 = e2;
    while (curr1 < e1) {
        updateCount(mapFromLeft, s1[curr1], 1);
        updateCount(mapFromRight, s1[curr1], 1);
        updateCount(mapFromLeft, s2[left2], -1);
        updateCount(mapFromRight, s2[right2], -1);
        if (mapFromLeft.size === 0 &&
            helper(s1, b1, curr1, s2, b2, left2) &&
            helper(s1, curr1 + 1, e1, s2, left2 + 1, e2)) {
            return true;
        }
        if (mapFromRight.size === 0 &&
            helper(s1, b1, curr1, s2, right2, e2) &&
            helper(s1, curr1 + 1, e1, s2, b2, right2 - 1)) {
            return true;
        }
        ++curr1;
        ++left2;
        --right2;
    }
    return false;
}

function updateCount(map, char, change) {
    let count = map.get(char);
    if (!count) {
        map.set(char, change);
    } else {
        count += change;
        if (count === 0) {
            map.delete(char);
        } else {
            map.set(char, count);
        }
    }
}

module.exports = isScramble;