/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
const TreeNode = require('../_utils/tree-node');

const buildTree = function (inorder, postorder) {
    let inorderMap = new Map();
    for (let i = 0; i < inorder.length; ++i) {
        inorderMap.set(inorder[i], i);
    }
    return buildHelper(inorder, inorderMap, 0, inorder.length - 1, postorder, postorder.length - 1);
};

function buildHelper(inorder, inorderMap, inBegin, inEnd, postorder, postEnd) {
    if (inBegin > inEnd) {
        return null;
    }
    let curr = new TreeNode(postorder[postEnd]);
    let inorderIdx = inorderMap.get(postorder[postEnd]);
    curr.right = buildHelper(inorder, inorderMap, inorderIdx + 1, inEnd, postorder, postEnd - 1);
    curr.left = buildHelper(inorder, inorderMap, inBegin, inorderIdx - 1, postorder, postEnd - inEnd + inorderIdx - 1);
    return curr;
}

module.exports = buildTree;