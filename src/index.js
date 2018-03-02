/* this file is only used for debug purpose */
const func = require('../src/range-sum-query-2d-immutable');
//const ListNode = require('../src/_utils/list-node');
//const TreeNode = require('../src/_utils/tree-node');
//const TreeLinkNode = require('../src/_utils/tree-link-node');
let obj = new func([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
let ret = obj.sumRegion(2, 1, 4, 3);