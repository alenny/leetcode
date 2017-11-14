/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

const inorderTraversal1 = function (root) {
    let result = [];
    traversal(root, result);
    return result;
};

function traversal(node, result) {
    if (!node) {
        return;
    }
    traversal(node.left, result);
    result.push(node.val);
    traversal(node.right, result);
};

const TreeNode = require('../_utils/tree-node');

const inorderTraversal = function (root) {
    if (!root) {
        return [];
    }
    let result = [];
    let stack = [root];
    while (stack.length > 0) {
        let node = stack.pop();
        if (node.right) {
            stack.push(node.right);
        }
        if (node.left) {
            stack.push(new TreeNode(node.val));
            stack.push(node.left);
        } else {
            result.push(node.val);
        }
    }
    return result;
};

module.exports = inorderTraversal;
