/* this file is only used for debug purpose */

const func = require('../src/house-robber-3');
const TreeNode = require('../src/_utils/tree-node');
let root = new TreeNode(3);
root.left = new TreeNode(2);
root.left.right = new TreeNode(3);
root.right = new TreeNode(3);
root.right.right = new TreeNode(1);
const result = func(root);
