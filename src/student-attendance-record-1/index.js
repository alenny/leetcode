/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = function (s) {
    let countA = 0;
    let cur = 0;
    while (cur < s.length) {
        while (cur < s.length && s[cur] !== 'L') {
            if (s[cur] === 'A') {
                ++countA;
            }
            ++cur;
        }
        if (cur === s.len) {
            break;
        }
        let countL = 0;
        while (cur < s.length && s[cur] === 'L') {
            ++countL;
            ++cur;
        }
        if (countL > 2) {
            return false;
        }
    }
    return countA <= 1;
};

module.exports = checkRecord;