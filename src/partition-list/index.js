/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
const partition = function (head, x) {
    if (!head) {
        return head;
    }
    let smallerHead = { next: null }, biggerHead = { next: null };
    let smallerCurr = smallerHead, biggerCurr = biggerHead;
    let curr = head;
    while (curr) {
        if (curr.val < x) {
            smallerCurr.next = curr;
            smallerCurr = curr;
        } else {
            biggerCurr.next = curr;
            biggerCurr = curr;
        }
        curr = curr.next;
    }
    smallerCurr.next = biggerHead.next;
    biggerCurr.next = null;
    return smallerHead.next;
};

module.exports = partition;