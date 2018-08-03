/* this file is only used for debug purpose */
//const func = require('../src/exam-room');
const func = require('../src/exam-room');
//const ListNode = require('../src/_utils/list-node');
//const TreeNode = require('../src/_utils/tree-node');
//const TreeLinkNode = require('../src/_utils/tree-link-node');
let examRoom = new func(4);
let ret;
ret = examRoom.seat();
ret = examRoom.seat();
ret = examRoom.seat();
ret = examRoom.seat();
examRoom.leave(1);
examRoom.leave(3);
ret = examRoom.seat();

