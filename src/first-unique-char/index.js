/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    var col = {};
    var i;
    var c;
    for (i = 0; i < s.length; ++i) {
        c = s[i];
        if (col[c]) {
            col[c] = 2;
        } else {
            col[c] = 1;
        }
    }
    for (i = 0; i < s.length; ++i) {
        c = s[i];
        if (col[c] === 1) {
            return i;
        }
    }
    return -1;
};

module.exports = firstUniqChar;