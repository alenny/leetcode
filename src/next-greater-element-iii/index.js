/**
 * @param {number} n
 * @return {number}
 */
const nextGreaterElement = function (n) {
    if (n < 10) {
        return -1;
    }
    let chars = n.toString().split('');
    let i = chars.length - 1;
    while (i > 0 && chars[i - 1] >= chars[i]) {
        --i;
    }
    if (i === 0) {
        return -1;
    }
    let left = i - 1, right = i;
    while (i < chars.length && chars[left] < chars[i]) {
        if (chars[i] < chars[right]) {
            right = i;
        }
        ++i;
    }
    [chars[left], chars[right]] = [chars[right], chars[left]];
    let rightChars = chars.slice(left + 1);
    rightChars.sort();
    chars.splice(left + 1, rightChars.length, ...rightChars);
    let newNum = Number.parseInt(chars.join(''));
    return newNum <= Math.pow(2, 31) - 1 ? newNum : -1;
};

module.exports = nextGreaterElement;