/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const wiggleSort = function (nums) {
    if (!nums || nums.length < 2) {
        return;
    }
    let midVal = findKthElement(nums, Math.floor(nums.length / 2));
    let smallerCount = 0, biggerCount = 0;
    for (let num of nums) {
        if (num > midVal) {
            ++biggerCount;
        } else if (num < midVal) {
            ++smallerCount;
        }
    }
    let leftMidCount = Math.ceil(nums.length / 2) - smallerCount;
    let leftMidEnd = (leftMidCount - 1) * 2;
    let rightMidBegin = biggerCount * 2 + 1;
    let smallerBegin = leftMidEnd + 2;
    let s = getNextSmallerIndex(-1, smallerBegin);
    let m = getNextMidIndex(-2, leftMidEnd, rightMidBegin);
    let b = getNextBiggerIndex(-1);
    while (s < nums.length) {
        if (nums[s] === midVal) {
            swap(nums, s, m);
            m = getNextMidIndex(m, leftMidEnd, rightMidBegin);
        } else if (nums[s] > midVal) {
            swap(nums, s, b);
            b = getNextBiggerIndex(b);
        } else {
            s = getNextSmallerIndex(s, smallerBegin);
        }
    }
    while (b < rightMidBegin) {
        if (nums[b] === midVal) {
            swap(nums, b, m);
            m = getNextMidIndex(m, leftMidEnd, rightMidBegin);
        } else {
            b = getNextBiggerIndex(b);
        }
    }
};

// use prevIndex = -2 to get the first index
function getNextMidIndex(prevIndex, leftMidEnd, rightMidBegin) {
    return prevIndex === leftMidEnd ? rightMidBegin : prevIndex + 2;
}

// use prevIndex = -1 to get the first index
function getNextSmallerIndex(prevIndex, smallerBegin) {
    return prevIndex === -1 ? smallerBegin : prevIndex + 2;
}

// use prevIndex = -1 to get the first index
function getNextBiggerIndex(prevIndex) {
    return prevIndex === -1 ? 1 : prevIndex + 2;
}

// k is from 0. O(n) time and O(1) space
function findKthElement(nums, k) {
    return quickHelper(nums, k, 0, nums.length - 1);
}

function quickHelper(nums, k, left, right) {
    let pivot = nums[right];
    let pivotIndex = partition(nums, left, right - 1, pivot);
    if (pivotIndex === k) {
        return pivot;
    }
    swap(nums, pivotIndex, right);
    return pivotIndex > k ? quickHelper(nums, k, left, pivotIndex - 1) :
        quickHelper(nums, k, pivotIndex + 1, right);
}

function partition(nums, left, right, pivot) {
    let idx = left, storeIdx = left;
    while (idx <= right) {
        if (nums[idx] < pivot) {
            swap(nums, idx, storeIdx);
            ++storeIdx;
        }
        ++idx;
    }
    return storeIdx;
}

function swap(nums, m, n) {
    [nums[m], nums[n]] = [nums[n], nums[m]];
}

module.exports = wiggleSort;