/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxConsecutiveOnes = function (nums) {
    let maxCount = 0;
    let count = 0;
    for (let n of nums) {
        if (n === 1) {
            ++count;
        } else {
            if (count > maxCount) {
                maxCount = count;
            }
            count = 0;
        }
    }
    return Math.max(count, maxCount);
};

module.exports = findMaxConsecutiveOnes;