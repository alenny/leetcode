/**
 * @param {string} s
 * @return {boolean}
 */
const repeatedSubstringPattern = function (s) {
    let patternLength = 1;
    while (patternLength < s.length) {
        while (patternLength < s.length && s[patternLength] !== s[0]) {
            ++patternLength;
        }
        if (patternLength >= s.length) {
            break;
        }
        let dupCount = s.length / patternLength;
        if (dupCount !== Math.floor(dupCount)) {
            ++patternLength;
            continue;
        }
        let pattern = s.substr(0, patternLength);
        let allMatched = true;
        for (let matchStart = patternLength; matchStart <= s.length - patternLength; matchStart += patternLength) {
            if (pattern !== s.substr(matchStart, patternLength)) {
                allMatched = false;
                break;
            }
        }
        if (allMatched) {
            return true;
        }
        ++patternLength;
    }
    return false;
};

module.exports = repeatedSubstringPattern;