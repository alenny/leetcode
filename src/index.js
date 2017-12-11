/* this file is only used for debug purpose */
const func = require('../src/flatten-binary-tree-to-linked-list');
const TreeNode = require('../src/_utils/tree-node')
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(3);
func(root);

