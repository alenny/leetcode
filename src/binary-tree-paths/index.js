/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
const binaryTreePaths = function (root) {
    if (!root) {
        return [];
    }
    let stack = [];
    let ret = [];
    traverse(root, stack, ret);
    return ret;
};

function traverse(node, stack, ret) {
    if (!node.left && !node.right) {
        let result = '';
        for (let val of stack) {
            result += val + '->';
        }
        result += node.val;
        ret.push(result);
    } else {
        stack.push(node.val);
        if (node.left) {
            traverse(node.left, stack, ret);
        }
        if (node.right) {
            traverse(node.right, stack, ret);
        }
        stack.pop();
    }
}

module.exports = binaryTreePaths;