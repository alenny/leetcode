/* this file is only used for debug purpose */
// const func = require('../src/word-ladder');
// let ret = func('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"]);
const func = require('../src/evaluate-division');
//const ListNode = require('../src/_utils/list-node');
//const TreeNode = require('../src/_utils/tree-node');
let ret = func([["x1", "x2"], ["x2", "x3"], ["x3", "x4"], ["x4", "x5"]], [3.0, 4.0, 5.0, 6.0], [["x1", "x5"], ["x5", "x2"], ["x2", "x4"], ["x2", "x2"], ["x2", "x9"], ["x9", "x9"]]);
