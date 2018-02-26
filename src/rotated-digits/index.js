/**
 * @param {number} N
 * @return {number}
 */
const rotatedDigits = function (N) {
    let count = 0;
    const ROTATION_SET = new Set([0, 1, 2, 5, 6, 8, 9]);
    const SET_2569 = new Set([2, 5, 6, 9]);
    for (let n = 1; n <= N; ++n) {
        let num = n;
        let hasNonRotation = false;
        let has2569 = false;
        while (num > 0) {
            let tmp = num % 10;
            if (!ROTATION_SET.has(tmp)) {
                hasNonRotation = true;
                break;
            }
            if (SET_2569.has(tmp)) {
                has2569 = true;
            }
            num = Math.floor(num / 10);
        }
        if (!hasNonRotation && has2569) {
            ++count;
        }
    }
    return count;
};

module.exports = rotatedDigits;