/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
class MinHeap {
    constructor() {
        this.heap = [];
        this.length = 0;
    }
    insert(info) {
        this.heap[this.length] = info;
        let currIndex = this.length++;
        while (currIndex > 0) {
            let pi = this.parentIndex(currIndex);
            if (info.node.val >= this.heap[pi].node.val) {
                break;
            }
            this.switchItems(currIndex, pi);
            currIndex = pi;
        }
    }
    pop() {
        if (this.length === 0) {
            return null;
        }
        let ret = this.heap[0];
        this.heap[0] = this.heap[--this.length];
        let currIndex = 0;
        while (currIndex < this.length) {
            let left = this.leftChildIndex(currIndex);
            if (left >= this.length) {
                break;
            }
            let right = this.rightChildIndex(currIndex);
            if (right >= this.length && this.heap[currIndex].node.val <= this.heap[left].node.val) {
                break;
            }
            if (right >= this.length) {
                // so must this.heap[currIndex].node.val > this.heap[left].node.val
                this.switchItems(currIndex, left);
                currIndex = left;
                continue;
            }
            // then must left and right both exist
            if (this.heap[currIndex].node.val <= this.heap[left].node.val && this.heap[currIndex].node.val <= this.heap[right].node.val) {
                break;
            }
            if (this.heap[left].node.val <= this.heap[right].node.val) {
                this.switchItems(currIndex, left);
                currIndex = left;
                continue;
            }
            this.switchItems(currIndex, right);
            currIndex = right;
        }
        return ret;
    }
    isEmpty() {
        return this.length === 0;
    }
    parentIndex(index) {
        return (index - 1) >> 1;
    }
    leftChildIndex(index) {
        return (index << 1) + 1;
    }
    rightChildIndex(index) {
        return (index << 1) + 2;
    }
    switchItems(index1, index2) {
        [this.heap[index1], this.heap[index2]] = [this.heap[index2], this.heap[index1]];
    }
}

class NodeInfo {
    constructor(node, index) {
        this.node = node;
        this.index = index;
    }
}

const mergeKListsByHeap = function (lists) {
    // complexity: n*log(k)
    if (!lists || lists.length === 0) {
        return null;
    }
    let minHeap = new MinHeap();
    for (let i = 0; i < lists.length; ++i) {
        if (lists[i]) {
            minHeap.insert(new NodeInfo(lists[i], i));
            lists[i] = lists[i].next;
        }
    }
    if (minHeap.isEmpty()) {
        return null;
    }
    let headInfo = null;
    let prevInfo = null;
    let currInfo;
    while ((currInfo = minHeap.pop()) !== null) {
        if (!headInfo) {
            headInfo = currInfo;
        }
        if (prevInfo) {
            prevInfo.node.next = currInfo.node;
        }
        prevInfo = currInfo;
        if (lists[currInfo.index]) {
            minHeap.insert(new NodeInfo(lists[currInfo.index], currInfo.index));
            lists[currInfo.index] = lists[currInfo.index].next;
        }
    }
    return headInfo.node;
};

///////////////////////////////////////////////////////////////

const mergeKLists = function (lists) {
    return partition(lists, 0, lists.length - 1);
};

function partition(lists, start, end) {
    if (start === end) {
        return lists[start];
    }
    if (start > end) {
        return null;
    }
    let middle = (start + end) >> 1;
    let p1 = partition(lists, start, middle);
    let p2 = partition(lists, middle + 1, end);
    return mergeLists(p1, p2);
}

function mergeLists(list1, list2) {
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }
    if (list1.val < list2.val) {
        list1.next = mergeLists(list1.next, list2);
        return list1;
    }
    list2.next = mergeLists(list1, list2.next);
    return list2;
}

module.exports = mergeKLists;