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
var pruneTree = function (root) {
    return traverse(root);
};

function traverse(node) {
    if (!node) {
        return null;
    }
    node.left = traverse(node.left);
    node.right = traverse(node.right);
    return !node.left && !node.right && node.val === 0 ? null : node;
}

module.exports = pruneTree;