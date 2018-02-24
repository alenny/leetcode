/**
 * @param {string} s
 * @return {boolean}
 */
const checkValidString = function (s) {
    let leftCount = 0, rightCount = 0, starCount = 0;
    let idx = 0;
    while (idx < s.length) {
        let ch = s[idx++];
        if (ch === '(') {
            ++leftCount;
        } else if (ch === '*') {
            ++starCount;
        } else {    // ch === ')'
            ++rightCount;
            if (rightCount > leftCount + starCount) {
                return false;
            }
        }
    }
    idx = s.length - 1;
    leftCount = rightCount = starCount = 0;
    while (idx >= 0) {
        let ch = s[idx--];
        if (ch === ')') {
            ++rightCount;
        } else if (ch === '*') {
            ++starCount;
        } else {    // ch === '('
            ++leftCount;
            if (leftCount > rightCount + starCount) {
                return false;
            }
        }
    }
    return true;
};

module.exports = checkValidString;