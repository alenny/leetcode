/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */
const reverseBetween = function (head, m, n) {
    if (!head || !head.next) {
        return head;
    }
    let dummyHead = { next: head };
    let prevReverse = dummyHead, curr = head, k = 1;
    while (k < m) {
        prevReverse = curr;
        curr = curr.next;
        ++k;
    }
    let prev = null, reversedTail = curr;
    while (k <= n) {
        let next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
        ++k;
    }
    prevReverse.next = prev;
    reversedTail.next = curr;
    return dummyHead.next;
};

module.exports = reverseBetween;