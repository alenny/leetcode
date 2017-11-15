/**
 * @param {number[]} numbers
 * @return {number}
 */
const findDuplicate = function (numbers) {
    for (let i = 0; i < numbers.length; ++i) {
        let curr = numbers[i];
        for (let j = i + 1; j < numbers.length; ++j) {
            if (numbers[j] === curr) {
                return curr;
            }
        }
    }
    return undefined;
};

module.exports = findDuplicate;