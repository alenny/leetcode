class HeapItem {
    constructor(profit, requiredCapital) {
        this.profit = profit;
        this.requiredCapital = requiredCapital;
    }
}

class MaxHeap {
    constructor() {
        this.arr = [];
        this.length = 0;
    }
    insert(item) {
        this.arr[this.length++] = item;
        let idx = this.length - 1;
        while (idx > 0) {
            let pi = this.getParentIdx(idx);
            if (this.arr[idx].profit <= this.arr[pi].profit) {
                break;
            }
            this.switchItems(idx, pi);
            idx = pi;
        }
    }
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        let ret = this.arr[0];
        this.arr[0] = this.arr[--this.length];
        let idx = 0;
        while (idx < this.length) {
            let lc = this.getLeftChildIdx(idx);
            let rc = this.getRightChildIdx(idx);
            if (lc >= this.length) {
                break;
            }
            if (rc >= this.getRightChildIdx) {
                if (this.arr[idx].profit < this.arr[lc].profit) {
                    this.switchItems(idx, lc);
                }
                break;
            }
            let max = Math.max(this.arr[idx].profit, this.arr[lc].profit, this.arr[rc].profit);
            if (max === this.arr[idx].profit) {
                break;
            }
            let newIdx = max === this.arr[lc].profit ? lc : rc;
            this.switchItems(idx, newIdx);
            idx = newIdx;
        }
        return ret;
    }
    getParentIdx(idx) {
        return idx - 1 >> 1;
    }
    getLeftChildIdx(idx) {
        return (idx << 1) + 1;
    }
    getRightChildIdx(idx) {
        return (idx << 1) + 2;
    }
    switchItems(i0, i1) {
        [this.arr[i0], this.arr[i1]] = [this.arr[i1], this.arr[i0]];
    }
}

/**
 * @param {number} k
 * @param {number} W
 * @param {number[]} Profits
 * @param {number[]} Capital
 * @return {number}
 */
const findMaximizedCapital = function (k, W, Profits, Capital) {
    let maxHeap = new MaxHeap();
    let items = [];
    for (let i = 0; i < Profits.length; ++i) {
        items.push(new HeapItem(Profits[i], Capital[i]));
    }
    items.sort((a, b) => a.requiredCapital - b.requiredCapital);
    let begin = pushToHeap(maxHeap, items, 0, W);
    while (k > 0 && maxHeap.length > 0) {
        let item = maxHeap.pop();
        W += item.profit;
        begin = pushToHeap(maxHeap, items, begin, W);
        --k;
    }
    return W;
};

function pushToHeap(maxHeap, items, begin, W) {
    while (begin < items.length && items[begin].requiredCapital <= W) {
        maxHeap.insert(items[begin++]);
    }
    return begin;
}

module.exports = findMaximizedCapital;