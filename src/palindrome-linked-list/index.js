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
const isPalindrome = function (head) {
    if (!head) {
        return true;
    }

    // find the length
    let length = 0;
    let curr = head;
    while (curr) {
        ++length;
        curr = curr.next;
    }
    if (length === 1) {
        return true;
    }

    let halfLen = Math.floor(length / 2);

    // reverse the 1st half
    let cnt = 1;
    curr = head.next;
    head.next = null;
    let previous = head;
    while (cnt < halfLen) {
        let temp = curr.next;
        curr.next = previous;
        previous = curr;
        curr = temp;
        ++cnt;
    }

    let left = previous;
    let right = length % 2 === 0 ? curr : curr.next;
    while (left && right && left.val === right.val) {
        left = left.next;
        right = right.next;
    }
    return !left && !right;
};

module.exports = isPalindrome;