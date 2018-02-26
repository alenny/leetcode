/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
const recoverTree = function (root) {
    let status = { node0: null, node1: null };
    traverse(root, null, status);
    [status.node0.val, status.node1.val] = [status.node1.val, status.node0.val];
};

function traverse(node, prevNode, status) {
    if (!node) {
        return prevNode;
    }
    let leftNode = traverse(node.left, prevNode, status);
    if (leftNode && leftNode.val > node.val) {
        if (!status.node0) {
            status.node0 = leftNode;
            status.node1 = node;
        } else {
            status.node1 = node;
            return null;
        }
    }
    return traverse(node.right, node, status);
}

module.exports = recoverTree;