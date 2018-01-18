/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
    for (let i = 0; i < numbers.length; ++i) {
        let n = numbers[i];
        let n1 = target - n;
        if (n1 < n) {
            return false;
        }
        let i1 = find(numbers, i + 1, numbers.length - 1, n1);
        if (i1 !== -1) {
            return [i + 1, i1 + 1];
        }
    }
    throw 'no solution';
};

function find(numbers, begin, end, target) {
    if (begin > end) {
        return -1;
    }
    let mid = Math.floor((begin + end) / 2);
    if (numbers[mid] === target) {
        return mid;
    }
    return numbers[mid] > target ? find(numbers, begin, mid - 1, target)
        : find(numbers, mid + 1, end, target);
}

module.exports = twoSum;