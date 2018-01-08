/**
 * @param {number[]} numbers
 * @return {number}
 */
const missingNumber = function (numbers) {
    if (numbers.length === 0) {
        return 0;
    }
    let idx = 0;
    let nIdx = -1;
    while (idx < numbers.length) {
        let num = numbers[idx];
        if (num === idx) {
            ++idx;
            continue;
        }
        if (num === numbers.length) {
            nIdx = idx++;
            continue;
        }
        [numbers[idx], numbers[num]] = [numbers[num], num];
    }
    return nIdx === -1 ? numbers.length : nIdx;
};

module.exports = missingNumber;