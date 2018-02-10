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
const rotateRight = function (head, k) {
    if (!head || !head.next) {
        return head;
    }
    let stack = [];
    let curr = head;
    while (curr) {
        stack.push(curr);
        curr = curr.next;
    }
    k = k % stack.length;
    if (k === 0) {
        return head;
    }
    let newHead = null;
    let oldTail = stack[stack.length - 1];
    while (k > 0) {
        newHead = stack.pop();
        --k;
    }
    oldTail.next = head;
    stack[stack.length - 1].next = null;
    return newHead;
};

module.exports = rotateRight;