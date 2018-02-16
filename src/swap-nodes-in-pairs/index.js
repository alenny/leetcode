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
const swapPairs = function (head) {
    if (!head) {
        return null;
    }
    let dummyHead = { next: head };
    let prev = dummyHead, curr = head;
    while (curr) {
        if (!curr.next) {
            break;
        }
        let second = curr.next;
        curr.next = second.next;
        second.next = curr;
        prev.next = second;
        prev = curr;
        curr = curr.next;
    }
    return dummyHead.next;
};

module.exports = swapPairs;