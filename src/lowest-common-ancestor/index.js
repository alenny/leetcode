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
    let pStack = [];
    let qStack = [];
    traverse(root, p, q, pStack, qStack);
    let idx = 0;
    for (; idx < Math.min(pStack.length, qStack.length); ++idx) {
        if (pStack[idx] !== qStack[idx]) {
            break;
        }
    }
    return pStack[idx - 1];
};

function traverse(node, p, q, pStack, qStack) {
    if (!node) {
        return;
    }
    if (pStack.length === 0 || pStack[pStack.length - 1] !== p) {
        pStack.push(node);
    }
    if (qStack.length === 0 || qStack[qStack.length - 1] !== q) {
        qStack.push(node);
    }
    if (pStack[pStack.length - 1] === p && qStack[qStack.length - 1] === q) {
        return;
    }
    traverse(node.left, p, q, pStack, qStack);
    traverse(node.right, p, q, pStack, qStack);
    if (pStack[pStack.length - 1] !== p) {
        pStack.pop();
    }
    if (qStack[qStack.length - 1] !== q) {
        qStack.pop();
    }
}

module.exports = lowestCommonAncestor;