/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    if (s.length <= 1) {
        return s;
    }
    var left = 0, right = s.length - 1;
    var result = new Array(s.length);
    while (left <= right) {
        result[left] = s[right];
        result[right] = s[left];
        ++left;
        --right;
    }
    return result.join('');
};

module.exports = reverseString;