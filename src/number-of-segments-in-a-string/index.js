/**
 * @param {string} s
 * @return {number}
 */
const countSegments = function (s) {
    let count = 0, curr = 0;
    while (curr < s.length) {
        while (curr < s.length && s[curr] === ' ') {
            ++curr;
        }
        if (curr === s.length) {
            break;
        }
        ++count;
        while (curr < s.length && s[curr] !== ' ') {
            ++curr;
        }
    }
    return count;
};

module.exports = countSegments;