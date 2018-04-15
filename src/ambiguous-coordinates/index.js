/**
 * @param {string} S
 * @return {string[]}
 */
const ambiguousCoordinates = function (S) {
    let ret = [];
    let secondStart = 2;
    while (secondStart < S.length - 1) {
        let leftNumbers = getValidNumbers(S.substring(1, secondStart));
        let rightNumbers = getValidNumbers(S.substring(secondStart, S.length - 1));
        for (let ln of leftNumbers) {
            for (let rn of rightNumbers) {
                ret.push(formResult(ln, rn));
            }
        }
        ++secondStart;
    }
    return ret;
};

function getValidNumbers(str) {
    let nums = [];
    let num = Number.parseInt(str);
    if (num.toString() === str) {
        nums.push(num);
    }
    let dot = 1;
    while (dot < str.length) {
        let numStr = str.substring(0, dot) + '.' + str.substring(dot);
        num = Number.parseFloat(numStr);
        if (num.toString() === numStr) {
            nums.push(num);
        }
        ++dot;
    }
    return nums;
}

function formResult(left, right) {
    return '(' + left + ', ' + right + ')';
}

module.exports = ambiguousCoordinates;