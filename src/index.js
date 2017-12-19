/* this file is only used for debug purpose */
const func = require('../src/sort-list');
const ListNode = require('../src/_utils/list-node');
let head = new ListNode(2);
head.next = new ListNode(1);
let ret = func(head);
