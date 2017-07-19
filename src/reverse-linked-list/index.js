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
const reverseList = function (head) {
    if (head === null) {
        return null;
    }
    let curr = head.next;
    let previous = head;
    head.next = null;
    while (curr) {
        let temp = curr.next;
        curr.next = previous;
        previous = curr;
        curr = temp;
    }
    return previous;
};

module.exports = reverseList;