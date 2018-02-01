/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const ListNode = require('../_utils/list-node');
const addTwoNumbers = function (l1, l2) {
    let stack1 = [], stack2 = [];
    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    let head = null;
    let extra = 0;
    while (stack1.length > 0 && stack2.length > 0) {
        let n1 = stack1.pop();
        let n2 = stack2.pop();
        let result = n1 + n2 + extra;
        extra = Math.floor(result / 10);
        let newNode = new ListNode(result % 10);
        newNode.next = head;
        head = newNode;
    }
    while (stack1.length > 0) {
        let n1 = stack1.pop();
        let result = n1 + extra;
        extra = Math.floor(result / 10);
        let newNode = new ListNode(result % 10);
        newNode.next = head;
        head = newNode;
    }
    while (stack2.length > 0) {
        let n2 = stack2.pop();
        let result = n2 + extra;
        extra = Math.floor(result / 10);
        let newNode = new ListNode(result % 10);
        newNode.next = head;
        head = newNode;
    }
    if (extra > 0) {
        let newNode = new ListNode(extra);
        newNode.next = head;
        head = newNode;
    }
    return head;
};

module.exports = addTwoNumbers;