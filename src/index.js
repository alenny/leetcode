/* this file is only used for debug purpose */
const func = require('../src/maximum-width-of-binary-tree');
//const ListNode = require('../src/_utils/list-node');
const TreeNode = require('../src/_utils/tree-node');
//const TreeLinkNode = require('../src/_utils/tree-link-node');
let root = new TreeNode(1);
root.left = new TreeNode(3);
root.right = new TreeNode(2);
root.left.left = new TreeNode(5);
root.left.right = new TreeNode(3);
root.right.right = new TreeNode(9);
let ret;
ret = func(root);
