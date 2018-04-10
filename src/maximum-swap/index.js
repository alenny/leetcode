/**
 * @param {number} num
 * @return {number}
 */
const maximumSwap = function (num) {
    let originNum = num, pos = 0, digitPoses = new Array(10);
    for (let d = 0; d < 10; ++d) {
        digitPoses[d] = [];
    }
    let digits = [];
    while (num > 0) {
        let digit = num % 10;
        digitPoses[digit].push(pos++);
        digits.push(digit);
        num = Math.floor(num / 10);
    }
    let switchIdx = -1;
    --pos;
    let digit = 9;
    while (digit >= 0) {
        let poses = digitPoses[digit];
        if (poses.length === 0) {
            --digit;
            continue;
        }
        if (poses[poses.length - 1] !== pos) {
            switchIdx = poses[0];
            break;
        }
        poses.pop();
        --pos;
    }
    if (switchIdx === -1) {
        return originNum;
    }
    [digits[switchIdx], digits[pos]] = [digits[pos], digits[switchIdx]];
    return Number.parseInt(digits.reverse().join(''));
};

module.exports = maximumSwap;