class Faction {
    constructor(upIdx, downIdx) {
        this.upIdx = upIdx;
        this.downIdx = downIdx;
    }
}

class MinHeap {
    constructor(compare) {
        this.arr = [];
        this.length = 0;
        this.compare = compare;
    }
    insert(faction) {
        this.arr[this.length++] = faction;
        let idx = this.length - 1;
        while (idx > 0) {
            let pi = this.getParentIdx(idx);
            if (this.compare(this.arr[idx], this.arr[pi]) >= 0) {
                break;
            }
            this.switchItem(idx, pi);
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
            let li = this.getLeftChildIdx(idx);
            let ri = this.getRightChildIdx(idx);
            if (li >= this.length) {
                break;
            }
            if (ri >= this.length) {
                if (this.compare(this.arr[idx], this.arr[li]) > 0) {
                    this.switchItem(idx, li);
                }
                break;
            }
            let compL = this.compare(this.arr[idx], this.arr[li]);
            let compR = this.compare(this.arr[idx], this.arr[ri]);
            let compLR = this.compare(this.arr[li], this.arr[ri]);
            if (compL > 0 && compLR <= 0) {
                this.switchItem(idx, li);
                idx = li;
            } else if (compR > 0 && compLR >= 0) {
                this.switchItem(idx, ri);
                idx = ri;
            } else {
                break;
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
    switchItem(i0, i1) {
        [this.arr[i0], this.arr[i1]] = [this.arr[i1], this.arr[i0]];
    }
}

/**
 * @param {number[]} A
 * @param {number} K
 * @return {number[]}
 */
const kthSmallestPrimeFraction = function (A, K) {
    A.sort((a, b) => a - b);
    let minHeap = new MinHeap((f1, f2) => A[f1.upIdx] * A[f2.downIdx] - A[f2.upIdx] * A[f1.downIdx]);
    let downIdx = A.length - 1;
    for (let i = 0; i < Math.min(K, A.length - 1); ++i) {
        minHeap.insert(new Faction(0, downIdx--));
    }
    let f;
    while (K > 0) {
        f = minHeap.pop();
        if (f.upIdx < f.downIdx - 1) {
            minHeap.insert(new Faction(f.upIdx + 1, f.downIdx));
        }
        --K;
    }
    return [A[f.upIdx], A[f.downIdx]];
};

module.exports = kthSmallestPrimeFraction;