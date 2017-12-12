/**
 * @param {string} digits
 * @return {string[]}
 */
let dcMap = new Map();
dcMap.set('2', ['a', 'b', 'c']);
dcMap.set('3', ['d', 'e', 'f']);
dcMap.set('4', ['g', 'h', 'i']);
dcMap.set('5', ['j', 'k', 'l']);
dcMap.set('6', ['m', 'n', 'o']);
dcMap.set('7', ['p', 'q', 'r', 's']);
dcMap.set('8', ['t', 'u', 'v']);
dcMap.set('9', ['w', 'x', 'y', 'z']);

const letterCombinations = function (digits) {
    let results = [];
    if (digits.length > 0) {
        combineHelper(digits, digits.length, results);
    }
    return results;
};

function combineHelper(digits, length, results) {
    let currChs = dcMap.get(digits[length - 1]);
    if (length === 1) {
        for (let ch of currChs) {
            results.push(ch);
        }
        return;
    }
    combineHelper(digits, length - 1, results);
    let prevResultsLength = results.length;
    for (let ci = 1; ci < currChs.length; ++ci) {
        let ch = currChs[ci];
        for (let idx = 0; idx < prevResultsLength; ++idx) {
            results.push(results[idx] + ch);
        }
    }
    for (let idx = 0; idx < prevResultsLength; ++idx) {
        results[idx] += currChs[0];
    }
}

module.exports = letterCombinations;