/* this file is only used for debug purpose */

const func = require('./merge-two-binary-trees');
const TreeNode = require('./merge-two-binary-trees/tree-node');
const t1 = new TreeNode(1);
t1.right = new TreeNode(2);
const t2 = new TreeNode(2);
t2.left = new TreeNode(3);
t2.right = new TreeNode(4);
const result = func(t1, t2);
