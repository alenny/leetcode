/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
const isMatch = function (s, p) {
    if (p.length === 0) {
        return s.length === 0;
    }
    let pattern = p.split(/\*+/);
    if (pattern[0].length === 0 && pattern.length === 1) {
        return true;
    }
    let si = 0;
    if (pattern[0].length > 0) {
        if (!comparePattern(s, si, pattern[0])) {
            return false;
        }
        si += pattern[0].length;
    }
    let pi = 1;
    while (si < s.length && pi < pattern.length - 1) {
        si = indexOfPattern(s, si, pattern[pi]);
        if (si < 0) {
            return false;
        }
        si += pattern[pi++].length;
    }
    return si === s.length && (pi === pattern.length - 1 && pattern[pi].length === 0 || pi === pattern.length) ||
        si < s.length && pi === pattern.length - 1 && (s.length - si >= pattern[pi].length && comparePattern(s, s.length - pattern[pi].length, pattern[pi]) || pattern[pi].length === 0);
};

function comparePattern(s, si, pattern) {
    let psi = 0;
    while (si < s.length && psi < pattern.length) {
        if (s[si] !== pattern[psi] && pattern[psi] !== '?') {
            return false;
        }
        ++si;
        ++psi;
    }
    return psi === pattern.length;
}

function indexOfPattern(s, si, pattern) {
    let psi = 0;
    while (psi < pattern.length && pattern[psi] === '?') {
        ++psi;
    }
    if (psi === pattern.length) {
        return si;
    }
    si += psi;
    let textStart = psi;
    while (psi < pattern.length && pattern[psi] !== '?') {
        ++psi;
    }
    let word = pattern.substring(textStart, psi);
    while (si < s.length) {
        si = s.indexOf(word, si);
        if (si < 0) {
            return -1;
        }
        if (comparePattern(s, si + word.length, pattern.substring(psi))) {
            return si + word.length - psi;
        }
        ++si;
    }
    return -1;
}

module.exports = isMatch;