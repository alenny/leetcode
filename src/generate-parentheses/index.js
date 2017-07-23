/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
    const results = [];
    generateMore(results, [], n, 0, 0);
    return results;
};

const generateMore = function (results, strArray, n, cLeft, cRight) {
    const len = cLeft + cRight;
    if (len === (n << 1)) {
        results.push(strArray.join(''));
        return;
    }
    if (cLeft < n) {
        strArray[len] = '(';
        generateMore(results, strArray, n, cLeft + 1, cRight);
    }
    if (cRight < cLeft) {
        strArray[len] = ')';
        generateMore(results, strArray, n, cLeft, cRight + 1);
    }
};

module.exports = generateParenthesis;