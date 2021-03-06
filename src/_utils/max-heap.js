function parentIndex(idx) {
    return (idx - 1) >> 1;
}

function leftChildIndex(idx) {
    return (idx << 1) + 1;
}

function rightChildIndex(idx) {
    return (idx << 1) + 2;
}

function swap(arr, idx0, idx1) {
    [arr[idx0], arr[idx1]] = [arr[idx1], arr[idx0]];
}

function maxIndex(arr, idx0, idx1) {
    return arr[idx0].value > arr[idx1].value ? idx0 : idx1;
}

class MaxHeap {
    // heap is a complete binary tree
    constructor() {
        this.arr = new Array();
        this.length = 0;
    }
    pop() {
        if (this.length === 0) {
            return undefined;
        }

        // return the top and move the last node to the top
        let top = this.arr[0];
        this.arr[0] = this.arr[this.length - 1];
        --this.length;
        let idx = 0;
        while (idx <= this.length - 1) {
            let left = leftChildIndex(idx);
            let right = rightChildIndex(idx);
            if (left > this.length - 1) {
                break;
            }
            if (right > this.length - 1) {
                if (this.arr[idx].value < this.arr[left].value) {
                    swap(this.arr, idx, left);
                }
                break;
            }
            let maxLeftRight = maxIndex(this.arr, left, right);
            if (this.arr[idx].value >= this.arr[maxLeftRight].value) {
                break;
            }
            swap(this.arr, idx, maxLeftRight);
            idx = maxLeftRight;
        }
        return top;
    }
    peek() {
        return this.length > 0 ? this.arr[0] : undefined;
    }
    insert(node) {
        let idx = this.length++;
        this.arr[idx] = node;
        while (idx > 0) {
            let pidx = parentIndex(idx);
            if (this.arr[pidx].value >= node.value) {
                break;
            }
            swap(this.arr, idx, pidx);
            idx = pidx;
        }
    }
};

module.exports = MaxHeap;