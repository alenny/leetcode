/**
 * @param {number} N
 * @return {number}
 */
const monotoneIncreasingDigits = function (N) {
    let text = N.toString().split('');
    let i = 0;
    while (i < text.length - 1 && text[i] <= text[i + 1]) {
        ++i;
    }
    if (i === text.length - 1) {
        return N;
    }
    for (let j = i + 2; j < text.length; ++j) {
        text[j] = '9';
    }
    while (i >= 0 && text[i] > text[i + 1]) {
        text[i + 1] = '9';
        text[i] = (text[i] - 1).toString();
        --i;
    }
    return Number.parseInt(text.join(''));
};

module.exports = monotoneIncreasingDigits;