/* this file is only used for debug purpose */
const func = require('../src/merge-k-sorted-lists');
const ListNode = require('../src/_utils/list-node');
let list0 = new ListNode(-8);
list0.next = new ListNode(-7);
list0.next.next = new ListNode(-7);
list0.next.next.next = new ListNode(-5);
list0.next.next.next.next = new ListNode(1);
list0.next.next.next.next.next = new ListNode(1);
list0.next.next.next.next.next.next = new ListNode(3);
list0.next.next.next.next.next.next.next = new ListNode(4);
let list1 = new ListNode(-2);
let list2 = new ListNode(-10);
list2.next = new ListNode(-10);
list2.next.next = new ListNode(-7);
list2.next.next.next = new ListNode(0);
list2.next.next.next.next = new ListNode(1);
list2.next.next.next.next.next = new ListNode(3);
let list3 = new ListNode(2);
let ret = func([list0, list1, list2, list3]);
let expected = [-10, -10, -8, -7, -7, -7, -5, -2, 0, 1, 1, 1, 2, 3, 3, 4];
