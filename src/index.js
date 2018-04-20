/* this file is only used for debug purpose */
const func = require('../src/parse-lisp-expression');
//const ListNode = require('../src/_utils/list-node');
//const TreeNode = require('../src/_utils/tree-node');
//const TreeLinkNode = require('../src/_utils/tree-link-node');
let ret;
//ret = func('(add 1 2)');
//ret = func('(mult 3 (add 2 3))');
//ret = func('(let x 2 (mult x 5))');
//ret = func('(let x 2 (mult x (let x 3 y 4 (add x y))))');
//ret = func('(let x 3 x 2 x)');
//ret = func('(let x 1 y 2 x (add x y) (add x y))');
//ret = func('(let x 2 (add (let x 3 (let x 4 x)) x))');
//ret = func('(let a1 3 b2 (add a1 1) b2)');
ret = func("(let x -2 y x y)");
