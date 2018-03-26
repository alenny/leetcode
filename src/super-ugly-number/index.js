class HeapItem {
    constructor(product, prime) {
        this.product = product;
        this.prime = prime;
        this.seqIdx = 0;
    }
}

function compareItems(i1, i2) {
    return i1.product - i2.product;
}

class MinHeap {
    constructor() {
        this.items = [];
        this.length = 0;
    }
    insert(item) {
        this.items[this.length++] = item;
        let currIdx = this.length - 1;
        while (currIdx > 0) {
            let parentIdx = this.getParentIdx(currIdx);
            if (compareItems(this.items[currIdx], this.items[parentIdx]) >= 0) {
                break;
            }
            this.swap(currIdx, parentIdx);
            currIdx = parentIdx;
        }
    }
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        let ret = this.items[0];
        this.items[0] = this.items[--this.length];
        let currIdx = 0;
        while (currIdx < this.length) {
            let leftChildIdx = this.getLeftChildIdx(currIdx);
            let rightChildIdx = this.getRightChildIdx(currIdx);
            if (leftChildIdx >= this.length) {
                break;
            }
            if (rightChildIdx >= this.length) {
                if (compareItems(this.items[leftChildIdx], this.items[currIdx]) >= 0) {
                    break;
                }
                this.swap(leftChildIdx, currIdx);
                currIdx = leftChildIdx;
                continue;
            }
            if (compareItems(this.items[leftChildIdx], this.items[currIdx]) >= 0 &&
                compareItems(this.items[rightChildIdx], this.items[currIdx]) >= 0) {
                break;
            }
            if (compareItems(this.items[leftChildIdx], this.items[rightChildIdx]) < 0) {
                this.swap(leftChildIdx, currIdx);
                currIdx = leftChildIdx;
            } else {
                this.swap(rightChildIdx, currIdx);
                currIdx = rightChildIdx;
            }
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
    swap(idx1, idx2) {
        [this.items[idx1], this.items[idx2]] = [this.items[idx2], this.items[idx1]];
    }
}

/**
 * @param {number} n
 * @param {number[]} primes
 * @return {number}
 */
const nthSuperUglyNumber = function (n, primes) {
    let minHeap = new MinHeap();
    let sequence = [1];
    for (let prime of primes) {
        minHeap.insert(new HeapItem(1, prime));
    }
    while (sequence.length < n) {
        let item = minHeap.pop();
        if (item.product > sequence[sequence.length - 1]) {
            sequence.push(item.product);
        }
        item.product = sequence[item.seqIdx++] * item.prime;
        minHeap.insert(item);
    }
    return sequence[n - 1];
};

module.exports = nthSuperUglyNumber;