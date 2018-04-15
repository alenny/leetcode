/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
const numComponents = function (head, G) {
    let set = new Set();
    G.forEach(g => set.add(g));
    let count = 0;
    let node = head;
    while (node) {
        while (node && !set.has(node.val)) {
            node = node.next;
        }
        if (!node) {
            break;
        }
        ++count;
        while (node && set.has(node.val)) {
            node = node.next;
        }
    }
    return count;
};

module.exports = numComponents;