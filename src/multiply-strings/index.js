/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
    if (num1 === '0' || num2 === '0') {
        return '0';
    }
    let result = [];
    let extra = 0, resultPos = 0;
    while (resultPos < num1.length + num2.length - 1) {
        let sum = extra;
        for (let up = 0; up <= Math.min(num1.length - 1, resultPos); ++up) {
            let down = resultPos - up;
            let idx1 = num1.length - 1 - up;
            let idx2 = num2.length - 1 - down;
            if (idx2 < 0) {
                continue;
            }
            sum += (num1[idx1] - 0) * (num2[idx2] - 0);
        }
        result.push(sum % 10);
        extra = Math.floor(sum / 10);
        ++resultPos;
    }
    if (extra > 0) {
        result.push(extra);
    }
    result.reverse();
    return result.join('');
};

module.exports = multiply;