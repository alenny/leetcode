/**
 * @param {string} s
 * @return {boolean}
 */
const validPalindrome = function (s) {
    let left = 0, right = s.length - 1;
    while (left < right && s[left] === s[right]) {
        ++left;
        --right;
    }
    if (left >= right) {
        return true;
    }
    let newLeft = left + 1;
    let newRight = right;
    while (newLeft < newRight && s[newLeft] === s[newRight]) {
        ++newLeft;
        --newRight;
    }
    if (newLeft >= newRight) {
        return true;
    }
    newLeft = left;
    newRight = right - 1;
    while (newLeft < newRight && s[newLeft] === s[newRight]) {
        ++newLeft;
        --newRight;
    }
    return newLeft >= newRight;
};

module.exports = validPalindrome;