/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
const TreeNode = require('./tree-node');

var mergeTrees = function (t1, t2) {
    if (t1 === null) return t2;
    if (t2 === null) return t1;
    const target = new TreeNode();
    internalMerge(target, t1, t2);
    return target;
};

const internalMerge = function (target, t1, t2) {
    target.val = t1.val + t2.val;
    if (t1.left === null) {
        target.left = t2.left;
    } else if (t2.left === null) {
        target.left = t1.left;
    } else {
        target.left = new TreeNode();
        internalMerge(target.left, t1.left, t2.left);
    }
    if (t1.right === null) {
        target.right = t2.right;
    } else if (t2.right === null) {
        target.right = t1.right;
    } else {
        target.right = new TreeNode();
        internalMerge(target.right, t1.right, t2.right);
    }
};

module.exports = mergeTrees;