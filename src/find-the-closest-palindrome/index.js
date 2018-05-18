/**
 * @param {string} n
 * @return {string}
 */
const nearestPalindromic = function (n) {
    if (n.length === 1 || n === '10') {
        return (Number.parseInt(n) - 1).toString();
    }
    if (n === '11') {
        return '9';
    }
    let halfLen = n.length >> 1;
    let oldFirst = n.substr(0, n.length - halfLen);
    let oldFirstNum = Number.parseInt(oldFirst);
    let oldSecondNum = Number.parseInt(n.substr(n.length - halfLen));
    let newSecond = getPalindromicSecond(oldFirst, halfLen);
    let newSecondNum = Number.parseInt(newSecond);
    if (newSecondNum > oldSecondNum) {
        let newSecond1 = getPalindromicOfMinusOne(oldFirst, oldFirstNum, oldSecondNum, halfLen);
        return newSecond1.diff <= newSecondNum - oldSecondNum ?
            newSecond1.firstText + newSecond1.secondText : oldFirst + newSecond;
    }
    if (newSecondNum < oldSecondNum) {
        let newSecond1 = getPalindromicOfPlusOne(oldFirstNum, oldSecondNum, halfLen);
        return oldSecondNum - newSecondNum <= newSecond1.diff ?
            oldFirst + newSecond : newSecond1.firstText + newSecond1.secondText;
    }
    // newSecondNum === oldSecondNum
    let plusOne = getPalindromicOfPlusOne(oldFirstNum, oldSecondNum, halfLen);
    let minusOne = getPalindromicOfMinusOne(oldFirst, oldFirstNum, oldSecondNum, halfLen);
    return minusOne.diff <= plusOne.diff ?
        minusOne.firstText + minusOne.secondText : plusOne.firstText + plusOne.secondText;
};

function getPalindromicSecond(firstHalf, halfLen) {
    let arr = firstHalf.substr(0, halfLen).split('');
    arr.reverse();
    return arr.join('');
}

function getPalindromicOfMinusOne(oldFirst, oldFirstNum, oldSecondNum, halfLen) {
    let firstNum1 = oldFirstNum - 1;
    let first1 = firstNum1.toString();
    let newSecond1, diff;
    if (first1.length < oldFirst.length) {
        newSecond1 = first1;   // '99...9'
        if (first1.length + newSecond1.length < oldFirst.length + halfLen - 1) {
            newSecond1 += '9';
        }
        diff = oldSecondNum + 1;
    } else {
        newSecond1 = getPalindromicSecond(first1, halfLen);
        diff = Math.pow(10, halfLen) + oldSecondNum - Number.parseInt(newSecond1);
    }
    return { firstText: first1, secondText: newSecond1, diff: diff };
}

function getPalindromicOfPlusOne(oldFirstNum, oldSecondNum, halfLen) {
    let firstNum1 = oldFirstNum + 1;
    let first1 = firstNum1.toString();
    let newSecond1 = getPalindromicSecond(first1, halfLen);
    let diff = Math.pow(10, halfLen) + Number.parseInt(newSecond1) - oldSecondNum;
    return { firstText: first1, secondText: newSecond1, diff: diff };
}

module.exports = nearestPalindromic;