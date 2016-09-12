/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    if (s.length <= 1) {
        return s;
    }
    var left = 0, right = s.length - 1;
    var result = new Array(s.length);
    while (left < right) {
        while (left < right && !isVowel(s[left])) {
            result[left] = s[left];
            ++left;
        }
        while (right > left && !isVowel(s[right])) {
            result[right] = s[right];
            --right;
        }
        if (left < right) {
            result[right] = s[left];
            result[left] = s[right];
            ++left;
            --right;
        }
    }
    if (left === right) {
        result[left] = s[left];
    }
    return result.join('');
};

const vowels = {
    'a': 1,
    'e': 1,
    'i': 1,
    'o': 1,
    'u': 1,
    'A': 1,
    'E': 1,
    'I': 1,
    'O': 1,
    'U': 1
};

var isVowel = function (c) {
    return vowels[c];
};

module.exports = reverseVowels;