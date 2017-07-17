/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
    const wordStack = [];
    const results = [];
    for (let ch of s) {
        if (ch === ' ') {
            while (wordStack.length > 0) {
                results.push(wordStack.pop());
            }
            results.push(' ');
        } else {
            wordStack.push(ch);
        }
    }
    while (wordStack.length > 0) {
        results.push(wordStack.pop());
    }
    return results.join('');
};

const reverseWordsV2 = function (s) {
    const results = [];
    let wbegin = 0;
    for (let i = 0; i <= s.length; ++i) {
        if (i === s.length || s[i] === ' ') {
            for (let j = i - 1; j >= wbegin; j--) {
                results.push(s[j]);
            }
            if (i < s.length) {
                results.push(' ');
                wbegin = i + 1;
            }
        }
    }
    return results.join('');
};

module.exports = reverseWordsV2;