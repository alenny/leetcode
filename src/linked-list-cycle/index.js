/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
const hasCycle = function (head) {
    while (head != null) {
        const next = head.next;
        if (next === head) {
            return true;
        }
        head.next = head;
        head = next;
    }
    return false;
};

module.exports = hasCycle;