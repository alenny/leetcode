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
const convertBST = function (root) {
    internalConvert(root, null);
    return root;
};

const internalConvert = function (node, lastVisitedNode) {
    if (!node) {
        return lastVisitedNode;
    }
    lastVisitedNode = internalConvert(node.right, lastVisitedNode);
    node.val += lastVisitedNode ? lastVisitedNode.val : 0;
    lastVisitedNode = internalConvert(node.left, node);
    return lastVisitedNode;
}

module.exports = convertBST;