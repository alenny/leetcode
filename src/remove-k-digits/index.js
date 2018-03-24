/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */
const removeKdigits = function (num, k) {
    if (k >= num.length) {
        return '0';
    }
    if (k === 0) {
        return num;
    }
    let i = 1, newNum = [num[0]];
    while (i < num.length && k > 0) {
        if (num[i] >= newNum[newNum.length - 1]) {
            newNum.push(num[i++]);
            continue;
        }
        while (k > 0 && newNum.length > 0 && num[i] < newNum[newNum.length - 1]) {
            newNum.pop();
            --k;
        }
        newNum.push(num[i++]);
    }
    while (i < num.length) {
        newNum.push(num[i++]);
    }
    while (k > 0) {
        newNum.pop();
        --k;
    }
    i = 0;
    while (i < newNum.length && newNum[i] === '0') {
        ++i;
    }
    if (i === newNum.length) {
        return '0';
    }
    newNum.splice(0, i);
    return newNum.join('');
};

module.exports = removeKdigits;