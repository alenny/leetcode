/* this file is only used for debug purpose */
// const func = require('../src/word-ladder');
// let ret = func('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"]);
const func = require('../src/sudoku-solver');
//const ListNode = require('../src/_utils/list-node');
//const TreeNode = require('../src/_utils/tree-node');
//let ret = func('AB', 2);
//let ret = func(3, 2);
//let ret = func(2, 2);
let ret = func([[".", ".", "9", "7", "4", "8", ".", ".", "."], ["7", ".", ".", ".", ".", ".", ".", ".", "."], [".", "2", ".", "1", ".", "9", ".", ".", "."], [".", ".", "7", ".", ".", ".", "2", "4", "."], [".", "6", "4", ".", "1", ".", "5", "9", "."], [".", "9", "8", ".", ".", ".", "3", ".", "."], [".", ".", ".", "8", ".", "3", ".", "2", "."], [".", ".", ".", ".", ".", ".", ".", ".", "6"], [".", ".", ".", "2", "7", "5", "9", ".", "."]]);