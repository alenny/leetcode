/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var start = 0;
    var maxLen = 0;
    var set = {};
    var i = 0;
    for (; i < s.length; ++i) {
        var ch = s[i];
        var pos = set[ch];
        if (typeof pos !== 'undefined') {
            maxLen = Math.max(maxLen, i - start);
            start = Math.max(start, pos + 1);
        }
        set[ch] = i;
    }
    return Math.max(maxLen, i - start);
};

module.exports = lengthOfLongestSubstring;