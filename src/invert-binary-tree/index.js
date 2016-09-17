/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var TreeNode = require('./tree-node');

var invertTree = function (root) {
    if (!root) {
        return root;
    }
    invertTree(root.left);
    invertTree(root.right);
    var temp;
    temp = root.left;
    root.left = root.right;
    root.right = temp;
    return root;
};

module.exports = invertTree;