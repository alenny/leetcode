/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const ListNode = require('../_utils/list-node');

const sortListQuick = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let tail = head;
    while (tail.next) {
        tail = tail.next;
    }
    let dummyBegin = new ListNode(undefined);
    dummyBegin.next = head;
    quickHelper(dummyBegin, tail);
    return dummyBegin.next; // could be a new head
};

function quickHelper(preHead, tail) {
    if (tail === null || preHead.next === tail || preHead === tail) {
        return;
    }
    let preCurr = preHead, preStore = preHead;
    while (preCurr.next !== tail) {
        if (preCurr.next.val < tail.val) {
            switchNodes(preStore, preCurr);
            preStore = preStore.next;
        }
        preCurr = preCurr.next;
    }
    switchNodes(preStore, preCurr);
    quickHelper(preHead, preStore);
    quickHelper(preStore.next, preCurr.next);
}

// Switch pre0.next and pre1.next
function switchNodes(pre0, pre1) {
    if (pre0.next === pre1.next) {
        return;
    }
    let node0 = pre0.next;
    let node1 = pre1.next;
    if (pre0.next === pre1) {
        [node0.next, node1.next] = [node1.next, node0];
    } else if (pre1.next === pre0) {
        [node0.next, node1.next] = [node1, node0.next];
    } else {
        [node0.next, node1.next] = [node1.next, node0.next];
    }
    [pre0.next, pre1.next] = [node1, node0];
}

const sortList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let preStep1, step1 = head, step2 = head;
    while (step2 && step2.next) {
        preStep1 = step1;
        step1 = step1.next;
        step2 = step2.next.next;
    }
    // Split 2 halves and sort each and then merge
    preStep1.next = null;
    let resultHeadFirst = sortList(head);
    let resultHeadSecond = sortList(step1);
    return mergeLists(resultHeadFirst, resultHeadSecond);
};

function mergeLists(resultHeadFirst, resultHeadSecond) {
    let n1 = resultHeadFirst, n2 = resultHeadSecond, head, node, next;
    while (n1 && n2) {
        if (n1.val < n2.val) {
            next = n1;
            n1 = n1.next;
        } else {
            next = n2;
            n2 = n2.next;
        }
        if (!head) {
            head = node = next;
        } else {
            node.next = next;
            node = next;
        }
    }
    next = n1 || n2;
    if (!head) {
        head = next;
    } else {
        node.next = next;
    }
    return head;
}

module.exports = sortList;