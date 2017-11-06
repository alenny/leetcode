/**
 * @param {number[][]} nums
 * @return {number[]}
 */
const HeapNode = require('../_utils/heap-node');
const MaxHeap = require('../_utils/max-heap');

class InfoNode extends HeapNode {
    constructor(value, outerIndex, innerIndex) {
        super(value);
        this.outerIndex = outerIndex;
        this.innerIndex = innerIndex;
    }
};

const smallestRange = function (nums) {
    let maxHeap = new MaxHeap();
    let minInHeap = 100000;

    // Initialize
    for (let outerIndex = 0; outerIndex < nums.length; ++outerIndex) {
        // Should check from the last number of each list
        let innerIndex = nums[outerIndex].length - 1;
        let value = nums[outerIndex][innerIndex];
        let node = new InfoNode(value, outerIndex, innerIndex);
        maxHeap.insert(node);
        if (value < minInHeap) {
            minInHeap = value;
        }
    }
    if (maxHeap.length === 0) {
        return [undefined, undefined];
    }

    // Handle the max value in each round
    let rangeMin = -100000, rangeMax = 100000;
    for (; ;) {
        let maxNode = maxHeap.pop();
        if (maxNode.value - minInHeap <= rangeMax - rangeMin) {
            rangeMax = maxNode.value;
            rangeMin = minInHeap;
        }
        if (maxNode.innerIndex === 0) {
            break;
        }
        let nextInnerIndex = maxNode.innerIndex - 1;
        let nextValue = nums[maxNode.outerIndex][nextInnerIndex];
        let nextNode = new InfoNode(nextValue, maxNode.outerIndex, nextInnerIndex, nextValue);
        maxHeap.insert(nextNode);
        if (nextValue < minInHeap) {
            minInHeap = nextValue;
        }
    }

    return [rangeMin, rangeMax];
};

module.exports = smallestRange;