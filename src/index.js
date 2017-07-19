/* this file is only used for debug purpose */

const func = require('../src/palindrome-linked-list');
const ListNode = require('../src/palindrome-linked-list/list-node');
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(2);
head.next.next.next = new ListNode(1);
const result = func(head);
