/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
const findClosestElements = function (arr, k, x) {
    return findHelper(arr, 0, arr.length - 1, k, x);
};

function findHelper(arr, begin, end, k, x) {
    if (begin > end) {
        return getResult(arr, end, begin, k, x);
    }
    let mid = begin + end >> 1;
    if (arr[mid] > x) {
        return findHelper(arr, begin, mid - 1, k, x);
    }
    if (arr[mid] < x) {
        return findHelper(arr, mid + 1, end, k, x);
    }
    // arr[mid] === x
    return getResult(arr, mid - 1, mid + 1, k - 1, x);
}

function getResult(arr, left, right, k, x) {
    while (k > 0 && left >= 0 && right < arr.length) {
        if (arr[right] - x < x - arr[left]) {
            ++right;
        } else {
            --left;
        }
        --k;
    }
    while (k > 0 && left >= 0) {
        --left;
        --k;
    }
    while (k > 0 && right < arr.length) {
        ++right;
        --k;
    }
    return arr.slice(left + 1, right);
}

module.exports = findClosestElements;