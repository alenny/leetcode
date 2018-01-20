/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function (s, k) {
    let left = 0;
    let ret = '';
    while (left < s.length) {
        let right = Math.min(left + k - 1, s.length - 1);
        for (let i = right; i >= left; --i) {
            ret += s[i];
        }
        left += 2 * k;
        ret += s.substring(right + 1, left);
    }
    return ret;
};

module.exports = reverseStr;