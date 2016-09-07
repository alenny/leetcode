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
var addTwoNumbers = function (l1, l2) {
    var head = null;
    var current = null;
    var adv = 0;
    var sum;
    var val;
    while (l1 && l2) {
        sum = l1.val + l2.val + adv;
        adv = sum > 9 ? 1 : 0;
        value = sum % 10;
        if (current) {
            current.next = createNode(value);
            current = current.next;
        } else {
            head = current = createNode(value);
        }
        l1 = l1.next;
        l2 = l2.next;
    }
    var lmore = l1 ? l1 : l2;
    while (lmore) {
        sum = lmore.val + adv;
        adv = sum > 9 ? 1 : 0;
        value = sum % 10;
        current.next = createNode(value);
        current = current.next;
        lmore = lmore.next;
    }
    if (adv > 0) {
        current.next = createNode(adv);
    }
    return head;
};

var ListNode = require('./list-node');

var createNode = function (value) {
    return new ListNode(value);
};

module.exports = addTwoNumbers;