/**
 * @param {number[]} numbers
 * @param {number} k
 * @return {number}
 */
const findKthLargestSort = function (numbers, k) {
    numbers.sort((a, b) => b - a);
    return numbers[k - 1];
};

const MaxHeap = require('../_utils/max-heap');
const HeapNode = require('../_utils/heap-node');
const findKthLargestHeap = function (numbers, k) {
    let maxHeap = new MaxHeap();
    for (let n of numbers) {
        maxHeap.insert(new HeapNode(n));
    }
    for (let i = 0; i < k - 1; ++i) {
        maxHeap.pop();
    }
    return maxHeap.pop().value;
};

const findKthLargestQuick = function (numbers, k) {
    return quickHelper(numbers, k - 1, 0, numbers.length - 1);
}

function quickHelper(arr, k, left, right) {
    if (left > right) {
        return undefined;
    }
    let pivot = arr[right];
    let pivotFinalIndex = partition(arr, left, right - 1, pivot);
    if (pivotFinalIndex === k) {
        return pivot;
    }
    swap(arr, pivotFinalIndex, right);
    if (k < pivotFinalIndex) {
        return quickHelper(arr, k, left, pivotFinalIndex - 1);
    }
    return quickHelper(arr, k, pivotFinalIndex + 1, right);
}

function partition(arr, from, to, pivot) {
    let storeIndex = from;
    for (let i = from; i <= to; ++i) {
        if (arr[i] > pivot) {
            swap(arr, i, storeIndex++);
        }
    }
    return storeIndex;
}

function swap(arr, i, j) {
    if (i !== j) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

const findKthLargest = findKthLargestQuick;

module.exports = findKthLargest;