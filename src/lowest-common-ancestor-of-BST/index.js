/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
const lowestCommonAncestor = function (root, p, q) {
    return traverse(root, p.val < q.val ? p : q, p.val < q.val ? q : p);
};

function traverse(node, small, big) {
    if (small.val === node.val || big.val === node.val || small.val < node.val && big.val > node.val) {
        return node;
    }
    return small.val < node.val && big.val < node.val ? traverse(node.left, small, big) : traverse(node.right, small, big);
}

module.exports = lowestCommonAncestor;