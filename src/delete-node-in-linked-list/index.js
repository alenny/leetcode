/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
const deleteNode = function (node) {
    // I solute it but still think it is a stupid question!
    node.val = node.next.val;
    node.next = node.next.next;
};

module.exports = deleteNode;