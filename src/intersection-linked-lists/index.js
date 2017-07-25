/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function (headA, headB) {
    let lenA = getListLength(headA);
    let lenB = getListLength(headB);
    let currA = headA;
    let currB = headB;
    while (lenA > lenB) {
        currA = currA.next;
        --lenA;
    }
    while (lenB > lenA) {
        currB = currB.next;
        --lenB;
    }
    while (currA !== currB) {
        currA = currA.next;
        currB = currB.next;
    }
    return currA;
};

const getListLength = function (head) {
    let count = 0;
    let curr = head;
    while (curr) {
        ++count;
        curr = curr.next;
    }
    return count;
};

module.exports = getIntersectionNode;