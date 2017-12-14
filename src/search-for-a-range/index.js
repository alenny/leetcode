/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (numbers, target) {
    let range = [-1, -1];
    searchHelper(numbers, 0, numbers.length - 1, target, range);
    return range;
};

function searchHelper(numbers, left, right, target, range) {
    if (left > right) {
        return;
    }
    let middle = left + right >> 1;
    if (target === numbers[middle]) {
        if (middle < range[0] || range[0] === -1) {
            range[0] = middle;
        }
        if (middle > range[1] || range[0] === -1) {
            range[1] = middle;
        }
    }
    searchHelper(numbers, left, middle - 1, target, range);
    searchHelper(numbers, middle + 1, right, target, range);
}

module.exports = searchRange;