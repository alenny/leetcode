/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
const removeNthFromEnd = function (head, n) {
    // use 2 pointers with n as their distance
    let curr = head;
    while (curr && n > 0) {
        curr = curr.next;
        --n;
    }
    if (!curr) {
        return head.next;   // remove head
    }
    let prevNth = head; // (n-1)th node
    while (curr.next) {
        prevNth = prevNth.next;
        curr = curr.next;
    }
    prevNth.next = prevNth.next.next;
    return head;
};

module.exports = removeNthFromEnd;