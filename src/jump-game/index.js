/**
 * @param {number[]} numbers
 * @return {boolean}
 */
const canJumpDP = function (numbers) {
    // dp[i] stores whether can jump to position i from start
    let dp = new Array(numbers.length);
    dp.fill(false);
    dp[0] = true;
    for (let i = 1; i < numbers.length; ++i) {
        for (let j = 0; j < i; ++j) {
            if (dp[j] && numbers[j] >= i - j) {
                dp[i] = true;
                break;
            }
        }
    }
    return dp[numbers.length - 1];
};

const canJump = function (numbers) {
    // Just need to check if all 0 positions can be skipped or not.
    let zeroNext = numbers.length - 1;
    while (zeroNext > 0) {
        while (zeroNext > 0 && numbers[zeroNext - 1] !== 0) {
            --zeroNext;
        }
        if (zeroNext === 0) {
            return true;    // No zero position in range
        }
        let i = 0;
        for (; i < zeroNext; ++i) {
            if (numbers[i] >= zeroNext - i) {
                break;
            }
        }
        if (i === zeroNext) {
            return false;   // Cannot jump to zeroNext
        }
        zeroNext = i;
    }
    return true;
};

module.exports = canJump;