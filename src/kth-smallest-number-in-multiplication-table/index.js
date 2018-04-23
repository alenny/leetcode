class HeapItem {
    constructor(m, n, productCount) {
        this.m = m;
        this.n = n;
        this.product = m * n;
        this.productCount = productCount;
    }
}

class MinHeap {
    constructor() {
        this.arr = [];
        this.length = 0;
    }
    insert(item) {
        this.arr[this.length++] = item;
        let idx = this.length - 1;
        while (idx > 0) {
            let pi = this.parentIdx(idx);
            if (this.arr[idx].product >= this.arr[pi].product) {
                break;
            }
            this.switchItems(idx, pi);
            idx = pi;
        }
    }
    pop() {
        if (this.length === 0) {
            return null;
        }
        let ret = this.arr[0];
        this.arr[0] = this.arr[--this.length];
        let idx = 0;
        while (idx < this.length) {
            let li = this.leftChildIdx(idx);
            let ri = this.rightChildIdx(idx);
            if (li >= this.length) {
                break;
            }
            if (ri >= this.length) {
                if (this.arr[idx].product > this.arr[li].product) {
                    this.switchItems(idx, li);
                }
                break;
            }
            // ri < this.length
            let minProduct = Math.min(this.arr[li].product, this.arr[ri].product, this.arr[idx].product);
            if (minProduct === this.arr[idx].product) {
                break;
            }
            let si = minProduct === this.arr[li].product ? li : ri;
            this.switchItems(si, idx);
            idx = si;
        }
        return ret;
    }
    leftChildIdx(idx) {
        return (idx << 1) + 1;
    }
    rightChildIdx(idx) {
        return (idx << 1) + 2;
    }
    parentIdx(idx) {
        return idx - 1 >> 1;
    }
    switchItems(i0, i1) {
        [this.arr[i0], this.arr[i1]] = [this.arr[i1], this.arr[i0]];
    }
}

/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const findKthNumberByHeap = function (m, n, k) {
    if (m > n) {
        [m, n] = [n, m];
    }
    let minHeap = new MinHeap();
    for (let ni = 1; ni <= Math.min(n, k); ++ni) {
        minHeap.insert(new HeapItem(1, ni, ni !== 1 && ni <= m ? 2 : 1));
    }
    let currItem;
    while (k > 0) {
        currItem = minHeap.pop();
        k -= currItem.productCount;
        if (currItem.m === currItem.n) {
            continue;
        }
        if (currItem.m < m && currItem.n <= n) {
            minHeap.insert(new HeapItem(currItem.m + 1, currItem.n, currItem.n !== currItem.m + 1 && currItem.n <= m ? 2 : 1));
        }
    }
    return currItem.product;
};

const findKthNumber = function (m, n, k) {
    if (m > n) {
        [m, n] = [n, m];
    }
    let low = 1, high = m * n;
    while (low < high) {
        let mid = (low + high) >> 1;
        let countRet = countPos(mid, m, n);
        if (countRet[0] >= k && countRet[0] - countRet[1] < k) {
            return mid;
        }
        if (countRet[0] < k) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }
    return high;
};

function countPos(val, m, n) {
    let count = 0, found = 0;
    for (let i = 1; i <= Math.min(m, val); ++i) {
        let div = Math.floor(val / i);
        if (val % i === 0 && div <= n) {
            ++found;
        }
        count += Math.min(n, div);
    }
    return [count, found];
}

module.exports = findKthNumber;