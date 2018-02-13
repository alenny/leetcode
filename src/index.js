/* this file is only used for debug purpose */
// const func = require('../src/word-ladder');
// let ret = func('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"]);
const func = require('../src/my-calendar-ii');
//const ListNode = require('../src/_utils/list-node');
//const TreeNode = require('../src/_utils/tree-node');
let cal = new func();
let ret = cal.book(24, 40);
ret = cal.book(43, 50);
ret = cal.book(27, 43);
ret = cal.book(5, 21);
ret = cal.book(30, 40);
ret = cal.book(14, 29);
ret = cal.book(3, 19);
ret = cal.book(3, 14);
ret = cal.book(6, 19);
