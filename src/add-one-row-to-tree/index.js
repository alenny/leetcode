/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} v
 * @param {number} d
 * @return {TreeNode}
 */
const TreeNode = require('../_utils/tree-node');

const addOneRow = function (root, v, d) {
    if (d === 1) {
        let newRoot = new TreeNode(v);
        newRoot.left = root;
        return newRoot;
    }
    traverse(root, 1, v, d);
    return root;
};

function traverse(node, currDepth, v, d) {
    if (!node) {
        return;
    }
    if (currDepth < d - 1) {
        traverse(node.left, currDepth + 1, v, d);
        traverse(node.right, currDepth + 1, v, d);
        return;
    }
    let newLeft = new TreeNode(v);
    let newRight = new TreeNode(v);
    [newLeft.left, newRight.right] = [node.left, node.right];
    [node.left, node.right] = [newLeft, newRight];
}

module.exports = addOneRow;