/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let map = new Map();
    for (let ch of s) {
        let count = map.get(ch);
        if (count) {
            map.set(ch, count + 1);
        } else {
            map.set(ch, 1);
        }
    }
    for (let ch of t) {
        let count = map.get(ch);
        if (count === undefined || count === 0) {
            return false;
        }
        map.set(ch, count - 1);
    }
    return true;
};

module.exports = isAnagram;