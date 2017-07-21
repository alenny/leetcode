/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function (s) {
    if (s.length <= 1) {
        return s;
    }
    let maxLeft = 0, maxRight = 0;
    for (let i = 0; i < s.length - 1; ++i) {
        let left, right;
        let singleCenterResult = getPalindromeRange(s, i, i);
        let doubleCenterResult = getPalindromeRange(s, i, i + 1);
        if (singleCenterResult.right - singleCenterResult.left > maxRight - maxLeft) {
            maxLeft = singleCenterResult.left;
            maxRight = singleCenterResult.right;
        }
        if (doubleCenterResult.right - doubleCenterResult.left > maxRight - maxLeft) {
            maxLeft = doubleCenterResult.left;
            maxRight = doubleCenterResult.right;
        }
    }
    return s.substr(maxLeft, maxRight - maxLeft + 1);
};

const getPalindromeRange = function (s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        --left;
        ++right;
    }
    ++left;
    --right;
    return { left, right };
};

module.exports = longestPalindrome;