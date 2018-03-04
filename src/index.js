/* this file is only used for debug purpose */
const func = require('../src/minimum-height-trees');
//const ListNode = require('../src/_utils/list-node');
//const TreeNode = require('../src/_utils/tree-node');
//const TreeLinkNode = require('../src/_utils/tree-link-node');
//let ret = func('123');
//let ret = func('8917');
//let ret = func("199111992");
let ret;
ret = func(8, [[0, 1], [1, 2], [2, 3], [0, 4], [4, 5], [4, 6], [6, 7]]);
ret = func(4, [[1, 0], [1, 2], [1, 3]]);
ret = func(6, [[3, 0], [3, 1], [3, 2], [3, 4], [5, 4]]);
ret = func(3, [[0, 1], [0, 2]]);