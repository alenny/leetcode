/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    var scol = {};
    var tcol = {};
    var i;
    for (i = 0; i < s.length; ++i) {
        addCount(scol, s[i]);
    }
    for (i = 0; i < t.length; ++i) {
        var c = t[i];
        if (!scol[c] || addCount(tcol, c) > scol[c]) {
            return c;
        }
    }
    return null;
};

var addCount = function(col, char) {
    return col[char] ? ++col[char] : col[char] = 1;
};

module.exports = findTheDifference;