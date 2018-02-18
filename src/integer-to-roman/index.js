/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function (num) {
    let map = new Map();
    map.set(1, 'I');
    map.set(5, 'V');
    map.set(10, 'X');
    map.set(50, 'L');
    map.set(100, 'C');
    map.set(500, 'D');
    map.set(1000, 'M');
    let result = '';
    let divisor = 1000;
    while (divisor > 0) {
        let curr = Math.floor(num / divisor);
        if (curr === 9) {
            result += map.get(divisor) + map.get(divisor * 10);
        } else if (curr > 5) {
            result += map.get(divisor * 5);
            for (let i = 0; i < curr - 5; ++i) {
                result += map.get(divisor);
            }
        } else if (curr === 5) {
            result += map.get(divisor * 5);
        } else if (curr === 4) {
            result += map.get(divisor) + map.get(divisor * 5);
        } else if (curr > 0) {
            for (let i = 0; i < curr; ++i) {
                result += map.get(divisor);
            }
        }
        num %= divisor;
        divisor = Math.floor(divisor / 10);
    }
    return result;
};

module.exports = intToRoman;