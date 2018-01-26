/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const removeElements = function (head, val) {
    let prev = null;
    let curr = head;
    while (curr) {
        if (curr.val !== val) {
            prev = curr;
            curr = curr.next;
            continue;
        }
        if (prev) {
            prev.next = curr.next;
            curr = curr.next;
        } else {
            curr = curr.next;
            head = curr;
        }
    }
    return head;
};

module.exports = removeElements;