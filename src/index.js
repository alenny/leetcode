/* this file is only used for debug purpose */
const func = require('../src/populating-next-right-pointers-in-each-node-ii');
//const ListNode = require('../src/_utils/list-node');
//const TreeNode = require('../src/_utils/tree-node');
const TreeLinkNode = require('../src/_utils/tree-link-node');
let root = new TreeLinkNode(0);
root.left = new TreeLinkNode(2);
root.right = new TreeLinkNode(4);
root.left.left = new TreeLinkNode(1);
root.right.left = new TreeLinkNode(3);
root.right.right = new TreeLinkNode(-1);
root.left.left.left = new TreeLinkNode(5);
root.left.left.right = new TreeLinkNode(1);
root.right.left.right = new TreeLinkNode(6);
root.right.right.right = new TreeLinkNode(8);
func(root);