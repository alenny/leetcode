/**
 * @param {string} s
 * @return {number}
 */
const strongPasswordChecker = function (s) {
    let idx = 0, lower = 1, upper = 1, digit = 1, repeatPoints = 0, repeats = [];
    while (idx < s.length) {
        if (s[idx] >= 'a' && s[idx] <= 'z') {
            lower = 0;
        } else if (s[idx] >= 'A' && s[idx] <= 'Z') {
            upper = 0;
        } else if (s[idx] >= '0' && s[idx] <= '9') {
            digit = 0;
        }
        let sameStart = idx++;
        while (idx < s.length && s[idx] === s[sameStart]) {
            ++idx;
        }
        let sameCount = idx - sameStart;
        if (sameCount > 2) {
            repeats.push(sameCount);
            repeatPoints += Math.floor(sameCount / 3);
        }
    }
    if (s.length < 6) {
        steps = Math.max(6 - s.length, repeatPoints);
        return steps + Math.max(0, lower + upper + digit - steps);
    }
    // handle repeats
    let totalToDelete = s.length - 20;
    if (totalToDelete > 0) {
        repeats.sort((a, b) => a % 3 - b % 3);
        let remainToDelete = totalToDelete;
        while (repeats.length > 0 && remainToDelete > 0) {
            let toRemove = repeats[0] % 3 + 1;
            if (remainToDelete >= toRemove) {
                --repeatPoints;
                remainToDelete -= toRemove;
                let count = repeats.shift();
                if (count > toRemove) {
                    repeats.push(count - toRemove);
                }
            } else {
                repeats[0] -= remainToDelete;
                remainToDelete = 0;
            }
        }
    }
    return Math.max(0, totalToDelete) + Math.max(repeatPoints, lower + upper + digit);
};

module.exports = strongPasswordChecker;