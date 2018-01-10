/* this file is only used for debug purpose */
const func = require('../src/odd-even-linked-list');
const ListNode = require('../src/_utils/list-node');
let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
const ret = func(head);
