/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
    if (s.length <= 1) {
        return true;
    }
    s = s.toLowerCase();
    let left = 0, right = s.length - 1;
    while (left < right) {
        while (left < right && !isChar(s[left])) {
            ++left;
        }
        while (left < right && !isChar(s[right])) {
            --right;
        }
        if (left >= right) {
            break;
        }
        if (s[left++] !== s[right--]) {
            return false;
        }
    }
    return true;
};

function isChar(ch) {
    return (ch >= 'a' && ch <= 'z') || (ch >= '0' && ch <= '9');
}

module.exports = isPalindrome;