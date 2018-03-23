class HeapItem {
    constructor(sum, idx1, idx2) {
        this.sum = sum;
        this.idx1 = idx1;
        this.idx2 = idx2;
    }
}

class MinHeap {
    constructor() {
        this.items = [];
        this.length = 0;
    }
    insert(item) {
        this.items[this.length++] = item;
        let i = this.length - 1;
        while (i > 0) {
            let pi = this.getParent(i);
            if (this.items[i].sum >= this.items[pi].sum) {
                break;
            }
            this.switchItems(i, pi);
            i = pi;
        }
    }
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        let ret = this.items[0];
        this.items[0] = this.items[--this.length];
        let i = 0;
        while (i < this.length) {
            let cli = this.getLeftChild(i);
            let cri = this.getRightChild(i);
            if (cli >= this.length) {
                break;
            }
            if (cri >= this.length) {
                if (this.items[i].sum > this.items[cli].sum) {
                    this.switchItems(i, cli);
                }
                i = cli;
            } else if (this.items[i].sum >= this.items[cri].sum && this.items[cli].sum >= this.items[cri].sum) {
                this.switchItems(i, cri);
                i = cri;
            } else if (this.items[i].sum >= this.items[cli].sum && this.items[cli].sum <= this.items[cri].sum) {
                this.switchItems(i, cli);
                i = cli;
            } else {
                break;
            }
        }
        return ret;
    }
    getParent(i) {
        return i - 1 >> 1;
    }
    getLeftChild(i) {
        return (i << 1) + 1;
    }
    getRightChild(i) {
        return (i << 1) + 2;
    }
    switchItems(i, j) {
        [this.items[i], this.items[j]] = [this.items[j], this.items[i]];
    }
}

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
const kSmallestPairs = function (nums1, nums2, k) {
    if (nums1.length === 0 || nums2.length === 0 || k === 0) {
        return [];
    }
    let minHeap = new MinHeap();
    for (let i = 0; i < Math.min(nums1.length, k); ++i) {
        minHeap.insert(new HeapItem(nums1[i] + nums2[0], i, 0));
    }
    let ret = [];
    let minItem;
    while (k > 0 && (minItem = minHeap.pop())) {
        ret.push([nums1[minItem.idx1], nums2[minItem.idx2]]);
        let newIdx2 = minItem.idx2 + 1;
        if (newIdx2 < nums2.length) {
            minHeap.insert(new HeapItem(nums1[minItem.idx1] + nums2[newIdx2], minItem.idx1, newIdx2));
        }
        --k;
    }
    return ret;
};

module.exports = kSmallestPairs;