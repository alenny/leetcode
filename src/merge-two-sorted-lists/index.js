const merge2SortedLists = function (l1, l2) {
    if (l1 === null) {
        return l2;
    }
    if (l2 === null) {
        return l1;
    }
    let l3 = null;
    let l3begin = null;
    if (l1.val < l2.val) {
        l3 = l3begin = l1;
        l1 = l1.next;
    } else {
        l3 = l3begin = l2;
        l2 = l2.next;
    }
    while (l1 !== null && l2 !== null) {
        if (l1.val < l2.val) {
            l3.next = l1;
            l1 = l1.next;
        } else {
            l3.next = l2;
            l2 = l2.next;
        }
        l3 = l3.next;
    }
    if (l1 === null) {
        while (l2 !== null) {
            l3.next = l2;
            l2 = l2.next;
            l3 = l3.next;
        }
    } else {
        while (l1 !== null) {
            l3.next = l1;
            l1 = l1.next;
            l3 = l3.next;
        }
    }
    return l3begin;
};

const ListNode = require('./list-node');

const createNode = function (value) {
    return new ListNode(value);
};

module.exports = merge2SortedLists;