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
const insertionSortList = function (head) {
    if (!head) {
        return null;
    }
    let dummyHead = { next: head };
    let nodeToSort = head.next;
    head.next = null;
    while (nodeToSort) {
        let prev = dummyHead;
        curr = prev.next;
        while (curr && curr.val < nodeToSort.val) {
            prev = curr;
            curr = curr.next;
        }
        let next = nodeToSort.next;
        prev.next = nodeToSort;
        nodeToSort.next = curr;
        nodeToSort = next;
    }
    return dummyHead.next;
};

module.exports = insertionSortList;