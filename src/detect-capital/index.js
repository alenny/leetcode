/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function (word) {
    if (word.length <= 1) {
        return true;
    }
    let firstCapital = isCapital(word, 0);
    let secondCapital = isCapital(word, 1);
    if (!firstCapital && secondCapital) {
        return false;
    }
    for (let i = 2; i < word.length; ++i) {
        if (isCapital(word, i) && (!firstCapital || !secondCapital)) {
            return false;
        }
        if (!isCapital(word, i) && secondCapital) {
            return false;
        }
    }
    return true;
};

function isCapital(word, idx) {
    return word[idx] >= 'A' && word[idx] <= 'Z';
}

module.exports = detectCapitalUse;