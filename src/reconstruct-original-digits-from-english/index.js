/**
 * @param {string} s
 * @return {string}
 */
const originalDigits = function (s) {
    let charMap = new Map();
    for (let ch of s) {
        let count = charMap.get(ch);
        charMap.set(ch, count ? count + 1 : 1);
    }
    let texts = ['zero', 'two', 'four', 'six', 'eight', 'one', 'three', 'five', 'seven', 'nine'];
    let keys = ['z', 'w', 'u', 'x', 'g', 'o', 'r', 'f', 's', 'i'];
    let digits = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];
    let ret = [];
    for (let i = 0; i < texts.length; ++i) {
        let found = true;
        while (found) {
            found = charMap.has(keys[i]);
            if (found) {
                ret.push(digits[i]);
                for (let ch of texts[i]) {
                    let count = charMap.get(ch);
                    if (count === 1) {
                        charMap.delete(ch);
                    } else {
                        charMap.set(ch, count - 1);
                    }
                }
            }
        }
    }
    ret.sort();
    return ret.join('');
};

module.exports = originalDigits;