/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
    return isMirrored(root, root);
};

const isMirrored = function (left, right) {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    return left.val === right.val
        && isMirrored(left.left, right.right)
        && isMirrored(left.right, right.left);
}

module.exports = isSymmetric;