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
const preorderTraversal = function (root) {
    let ret = [];
    let stack = [root];
    while (stack.length > 0) {
        let node = stack.pop();
        if (!node) {
            continue;
        }
        ret.push(node.val);
        stack.push(node.right);
        stack.push(node.left);
    }
    return ret;
};

module.exports = preorderTraversal;