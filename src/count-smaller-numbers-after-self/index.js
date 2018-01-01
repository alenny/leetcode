/**
 * @param {number[]} numbers
 * @return {number[]}
 */
class NumberInfo {
    constructor(val, index) {
        this.val = val;
        this.index = index;
    }
}
const countSmaller = function (numbers) {
    let numberInfos = new Array(numbers.length);
    for (let i = 0; i < numbers.length; ++i) {
        numberInfos[i] = new NumberInfo(numbers[i], i);
    }
    let smallerCounts = new Array(numbers.length);
    smallerCounts.fill(0);
    mergeSort(numberInfos, smallerCounts);
    return smallerCounts;
};

function mergeSort(numberInfos, smallerCounts) {
    if (numberInfos.length <= 1) {
        return numberInfos;
    }
    let mid = numberInfos.length >> 1;
    let leftNumberInfos = numberInfos.slice(0, mid);
    let rightNumberInfos = numberInfos.slice(mid);
    let leftRet = mergeSort(leftNumberInfos, smallerCounts);
    let rightRet = mergeSort(rightNumberInfos, smallerCounts);
    let left = 0, right = 0;
    let ret = new Array(leftRet.length + rightRet.length);
    while (left < leftRet.length || right < rightRet.length) {
        if (right === rightRet.length || (left < leftRet.length && leftRet[left].val <= rightRet[right].val)) {
            ret[left + right] = leftRet[left];
            smallerCounts[leftRet[left].index] += right;
            ++left;
        } else {
            ret[left + right] = rightRet[right];
            ++right;
        }
    }
    return ret;
}

module.exports = countSmaller;