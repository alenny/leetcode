/* this file is only used for debug purpose */
const func = require('../src/insertion-sort-list');
const ListNode = require('../src/_utils/list-node');
//const TreeNode = require('../src/_utils/tree-node');
let head = new ListNode(3);
head.next = new ListNode(2);
head.next.next = new ListNode(4);
func(head);