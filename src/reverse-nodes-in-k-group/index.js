/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
const reverseKGroup = function (head, k) {
    let count = 0, curr = head;
    while (curr) {
        ++count;
        curr = curr.next;
    }
    let groups = Math.floor(count / k);
    let dummyHead = { next: head };
    let prevOfGroup = dummyHead;
    curr = head;
    for (let i = 0; i < groups; ++i) {
        let j = 1, groupHead = curr, prev = curr;
        curr = curr.next;
        while (j < k) {
            let tmp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = tmp;
            ++j;
        }
        prevOfGroup.next = prev;
        prevOfGroup = groupHead;
    }
    prevOfGroup.next = curr;
    return dummyHead.next;
};

module.exports = reverseKGroup;