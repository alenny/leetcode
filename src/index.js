/* this file is only used for debug purpose */

const func = require('../src/binary-tree-inorder-traversal');
const TreeNode = require('../src/_utils/tree-node');
let root = new TreeNode(1);
root.right = new TreeNode(2);
root.right.left = new TreeNode(3);
let result = func(root);
assert.equal(result.length, 3);
assert.equal(result[0], 1);
assert.equal(result[1], 3);
assert.equal(result[2], 2);
