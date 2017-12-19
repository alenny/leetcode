/**
 * @param {number[]} numbers
 * @return {void} Do not return anything, modify numbers in-place instead.
 */
const nextPermutation = function (numbers) {
    if (!numbers || numbers.length <= 1) {
        return;
    }
    let i = numbers.length - 2;
    for (; i >= 0; --i) {
        if (numbers[i] < numbers[i + 1]) {
            break;
        }
    }
    if (i < 0) {
        // not able to rearrange because numbers are descending
        reverse(numbers, 0, numbers.length - 1);
    } else {
        let j = binarySearch(numbers, i + 1, numbers.length - 1, numbers[i]);
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        reverse(numbers, i + 1, numbers.length - 1);
    }
};

function reverse(numbers, start, end) {
    let i = start, j = end;
    while (i < j) {
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
        ++i;
        --j;
    }
}

function binarySearch(numbers, start, end, target) {
    let middle = start + end >> 1;
    if (numbers[middle] > target && (middle === numbers.length - 1 || numbers[middle + 1] <= target)) {
        return middle;
    }
    if (numbers[middle] > target) {
        return binarySearch(numbers, middle + 1, end, target);
    }
    return binarySearch(numbers, start, middle - 1, target);
}

module.exports = nextPermutation;