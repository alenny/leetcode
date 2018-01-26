/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
const isIsomorphic = function (s, t) {
    let dict = new Map();
    let mapped = new Set();
    let i = 0;
    while (i < s.length) {
        let mappedChar = dict.get(s[i]);
        if (!mappedChar) {
            if (mapped.has(t[i])) {
                return false;
            }
            dict.set(s[i], t[i]);
            mapped.add(t[i]);
            ++i;
            continue;
        }
        if (mappedChar !== t[i]) {
            return false;
        }
        ++i;
    }
    return true;
};

module.exports = isIsomorphic;