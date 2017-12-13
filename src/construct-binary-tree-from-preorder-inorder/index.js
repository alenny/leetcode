/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
const TreeNode = require('../_utils/tree-node');

const buildTree = function (preorder, inorder) {
    if (!preorder || !inorder || preorder.length <= 0 || inorder.length <= 0) {
        return null;
    }
    let inMap = new Map();
    for (let i = 0; i < inorder.length; ++i) {
        inMap.set(inorder[i], i);
    }
    return buildTreeHelper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1, inMap);
};

function buildTreeHelper(preorder, preLeft, preRight, inorder, inLeft, inRight, inMap) {
    if (preLeft > preRight) {
        return null;
    }
    let rootVal = preorder[preLeft];
    let root = new TreeNode(rootVal);
    let rootIndexInorder = inMap.get(rootVal);
    root.left = buildTreeHelper(preorder, preLeft + 1, preLeft + rootIndexInorder - inLeft, inorder, inLeft, rootIndexInorder - 1, inMap);
    root.right = buildTreeHelper(preorder, preLeft + rootIndexInorder - inLeft + 1, preRight, inorder, rootIndexInorder + 1, inRight, inMap);
    return root;
}

module.exports = buildTree;