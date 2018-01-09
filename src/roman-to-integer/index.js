/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
    let map = new Map();
    map.set('i', 1);
    map.set('v', 5);
    map.set('x', 10);
    map.set('l', 50);
    map.set('c', 100);
    map.set('d', 500);
    map.set('m', 1000);
    s = s.toLowerCase();
    let number = 0;
    let pos = s.length - 1;
    let prevChNum = 1;
    while (pos >= 0) {
        let chNum = map.get(s[pos--]);
        if (chNum < prevChNum) {
            number -= chNum;
            prevChNum = 1;
            continue;
        }
        number += chNum;
        prevChNum = chNum;
    }
    return number;
};

module.exports = romanToInt;