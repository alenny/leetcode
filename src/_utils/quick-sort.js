const quickSort = function (arr) {
    quickSortHelper(arr, 0, arr.length - 1);
};

function quickSortHelper(arr, left, right) {
    if (left >= right) {
        return;
    }
    let pivot = arr[right]; // select the rightest as the pivot
    let pivotFinalIndex = partition(arr, left, right - 1, pivot);
    swap(arr, pivotFinalIndex, right);
    quickSortHelper(arr, left, pivotFinalIndex - 1);
    quickSortHelper(arr, pivotFinalIndex + 1, right);
}

function partition(arr, from, to, pivot) {
    let storeIndex = from;
    for (let i = from; i <= to; ++i) {
        if (arr[i] < pivot) {
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

module.exports = quickSort;