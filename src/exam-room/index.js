class Node {
    constructor(left, right, total) {
        this.left = left;
        this.right = right;
        this.space = left === -1 || right === total ?
            right - left - 1 : right - left >> 1;
    }
}

class MaxHeap {
    constructor() {
        this.arr = [];
        this.length = 0;
        this.leftMap = [];
        this.rightMap = [];
    }
    insert(node) {
        this.arr[this.length] = node;
        let idx = this.length++;
        while (idx > 0) {
            let pi = this.getParent(idx);
            if (this.compare(idx, pi) <= 0) {
                break;
            }
            let pn = this.arr[pi];
            this.switchNodes(idx, pi);
            this.leftMap[pn.left] = this.rightMap[pn.right] = idx;
            idx = pi;
        }
        this.leftMap[node.left] = this.rightMap[node.right] = idx;
    }
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        return this.deleteByIdx(0);
    }
    deleteByLeft(left) {
        return this.deleteByIdx(this.leftMap[left]);
    }
    deleteByRight(right) {
        return this.deleteByIdx(this.rightMap[right]);
    }
    // internal methods below
    deleteByIdx(idx) {
        let nodeToDelete = this.arr[idx];
        this.arr[idx] = this.arr[--this.length];
        let node = this.arr[idx];
        while (idx < this.length) {
            let lc = this.getLeftChild(idx);
            let rc = this.getRightChild(idx);
            if (lc >= this.length) {
                break;
            }
            if (rc >= this.length) {
                if (this.compare(idx, lc) < 0) {
                    this.leftMap[this.arr[lc].left] = this.rightMap[this.arr[lc].right] = idx;
                    this.switchNodes(idx, lc);
                    idx = lc;
                }
                break;
            }
            let ci;
            if (this.compare(lc, rc) >= 0 && this.compare(idx, lc) < 0) {
                ci = lc;
            } else if (this.compare(lc, rc) < 0 && this.compare(idx, rc) < 0) {
                ci = rc;
            } else {
                break;
            }
            this.leftMap[this.arr[ci].left] = this.rightMap[this.arr[ci].right] = idx;
            this.switchNodes(idx, ci);
            idx = ci;
        }
        this.leftMap[node.left] = this.rightMap[node.right] = idx;
        return nodeToDelete;
    }
    getParent(idx) {
        return idx - 1 >> 1;
    }
    getLeftChild(idx) {
        return (idx << 1) + 1;
    }
    getRightChild(idx) {
        return (idx << 1) + 2;
    }
    switchNodes(i0, i1) {
        [this.arr[i0], this.arr[i1]] = [this.arr[i1], this.arr[i0]];
    }
    compare(i0, i1) {
        return this.arr[i0].space === this.arr[i1].space ?
            this.arr[i1].left - this.arr[i0].left :
            this.arr[i0].space - this.arr[i1].space;
    }
}

class ExamRoom {
    /**
     * @param {number} N
     */
    constructor(N) {
        this.total = N;
        this.maxHeap = new MaxHeap();
        this.maxHeap.insert(new Node(-1, N, N));
    }
    /**
     * @return {number}
     */
    seat() {
        let node = this.maxHeap.pop();
        let s = node.left === -1 ? 0 :
            (node.right === this.total ? this.total - 1 : node.space + node.left);
        if (s === node.left) {
            return undefined; // no available seat
        }
        this.maxHeap.insert(new Node(node.left, s, this.total));
        this.maxHeap.insert(new Node(s, node.right, this.total));
        return s;
    }
    /** 
     * @param {number} p
     * @return {void}
     */
    leave(p) {
        let r = this.maxHeap.deleteByLeft(p).right;
        let l = this.maxHeap.deleteByRight(p).left;
        this.maxHeap.insert(new Node(l, r, this.total));
    }
}

module.exports = ExamRoom;

/** 
 * Your ExamRoom object will be instantiated and called as such:
 * var obj = Object.create(ExamRoom).createNew(N)
 * var param_1 = obj.seat()
 * obj.leave(p)
 */