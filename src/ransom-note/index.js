/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    var rcol = {};
    var mcol = {};
    var i;
    if (magazine.length < ransomNote.length) {
        return false;
    }
    for (i = 0; i < ransomNote.length; ++i) {
        addCount(rcol, ransomNote[i]);
    }
    for (i = 0; i < magazine.length; ++i) {
        addCount(mcol, magazine[i]);
    }
    for (i in rcol){
        var m = mcol[i];
        if (!m || m < rcol[i]) {
            return false;
        }
    }
    return true;
};

var addCount = function (col, char) {
    return col[char] ? ++col[char] : col[char] = 1;
};

module.exports = canConstruct;