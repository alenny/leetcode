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
const flatten = function (root) {
    if (root) {
        flattenHelper(root);
    }
};

function flattenHelper(root) {
    let end = root;
    if (!root.left && !root.right) {
        return end;
    }
    if (root.right) {
        end = flattenHelper(root.right);
    }
    if (root.left) {
        let endOfLeft = flattenHelper(root.left);
        if (!root.right) {
            end = endOfLeft;
        }
        endOfLeft.right = root.right;
        root.right = root.left;
        root.left = null;

    }
    return end;
}

module.exports = flatten;