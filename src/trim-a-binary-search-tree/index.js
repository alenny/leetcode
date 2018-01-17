/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
const trimBST = function (root, L, R) {
    return trimHelper(null, root, false, L, R);
};

function trimHelper(parent, node, isLeftChild, L, R) {
    if (node === null) {
        return null;
    }
    if (node.val >= L && node.val <= R) {
        trimHelper(node, node.left, true, L, R);
        trimHelper(node, node.right, false, L, R);
        return node;
    }
    let nextNode = node.val < L ? node.right : node.left;
    if (parent && isLeftChild) {
        parent.left = nextNode;
    } else if (parent) {
        parent.right = nextNode;
    }
    return trimHelper(parent, nextNode, isLeftChild, L, R);
}

module.exports = trimBST;