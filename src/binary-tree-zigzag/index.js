/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const zigzagLevelOrder = function (root) {
    if (!root) {
        return [];
    }
    let ret = [];
    let stack = [root];
    let leftToRight = true;
    while (stack.length > 0) {
        let newStack = [];
        let resultRow = [];
        while (stack.length > 0) {
            let node = stack.pop();
            resultRow.push(node.val);
            if (leftToRight) {
                if (node.left) {
                    newStack.push(node.left);
                }
                if (node.right) {
                    newStack.push(node.right);
                }
            } else {
                if (node.right) {
                    newStack.push(node.right);
                }
                if (node.left) {
                    newStack.push(node.left);
                }
            }
        }
        ret.push(resultRow);
        stack = newStack;
        leftToRight = !leftToRight;
    }
    return ret;
};

module.exports = zigzagLevelOrder;