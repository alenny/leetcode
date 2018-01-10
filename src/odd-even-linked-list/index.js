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
const oddEvenList = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let oddHead = head;
    let evenHead = head.next;
    let oddCurr = oddHead;
    let evenCurr = evenHead;
    while (evenCurr && evenCurr.next) {
        oddCurr.next = evenCurr.next;
        oddCurr = oddCurr.next;
        evenCurr.next = oddCurr.next;
        evenCurr = evenCurr.next;
    }
    oddCurr.next = evenHead;
    return oddHead;
};

module.exports = oddEvenList;