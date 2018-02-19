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
const deleteDuplicates = function (head) {
    if (!head || !head.next) {
        return head;
    }
    let dummyHead = { val: undefined, next: head };
    let curr = head, prev = dummyHead;
    while (curr) {
        if (curr.next && curr.val === curr.next.val) {
            curr = curr.next;
        } else {
            if (prev.next !== curr) {
                prev.next = curr.next;
            } else {
                prev = curr;
            }
            curr = curr.next;
        }
    }
    return dummyHead.next;
};

module.exports = deleteDuplicates;