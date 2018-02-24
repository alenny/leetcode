/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
const reorderList = function (head) {
    if (!head || !head.next || !head.next.next) {
        return;
    }
    let one = head, two = head, prev;
    while (two && two.next) {
        prev = one;
        one = one.next;
        two = two.next.next;
    }
    if (two) {
        prev = one;
        one = one.next;
    }
    prev.next = null;
    // reverse from one
    prev = null;
    while (one) {
        let tmp = one.next;
        one.next = prev;
        prev = one;
        one = tmp;
    }
    // then prev is the last node of the original list
    // we can merge now
    let first = head, second = prev;
    while (first && second) {
        let fn = first.next, sn = second.next;
        first.next = second;
        second.next = fn;
        [first, second] = [fn, sn];
    }
};

module.exports = reorderList;