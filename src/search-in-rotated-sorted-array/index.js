/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number}
 */
const search = function (numbers, target) {
    if (!numbers || numbers.length === 0) {
        return -1;
    }
    return searchHelper(numbers, 0, numbers.length - 1, target);
};

function searchHelper(numbers, left, right, target) {
    if (left > right) {
        return -1;
    }
    let middle = left + right >> 1;
    if (target === numbers[middle]) {
        return middle;
    }
    if ((numbers[left] < numbers[middle] && target < numbers[middle] && target >= numbers[left]) ||
        (numbers[left] > numbers[middle] && target > numbers[right]) ||
        (numbers[left] > numbers[middle] && target < numbers[middle])) {
        return searchHelper(numbers, left, middle - 1, target);
    }
    // numbers[left] < numbers[middle] && target < numbers[left]
    // numbers[left] < numbers[middle] && target > numbers[middle]
    // numbers[left] > numbers[middle] && target > numbers[middle] && target <= numbers[right]
    return searchHelper(numbers, middle + 1, right, target);
}

module.exports = search;