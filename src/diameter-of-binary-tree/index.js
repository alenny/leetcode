/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const diameterOfBinaryTree = function (root) {
    return calDiameterAndHeight(root).diameter;
};

const calDiameterAndHeight = function (node) {
    if (node === null) {
        return { diameter: 0, height: 0 };
    }
    if (node.left === null && node.right === null) {
        return { diameter: 0, height: 1 };
    }
    const leftResult = calDiameterAndHeight(node.left);
    const rightResult = calDiameterAndHeight(node.right);
    const diameter = Math.max(leftResult.diameter, rightResult.diameter, leftResult.height + rightResult.height);
    const height = Math.max(leftResult.height, rightResult.height) + 1;
    return { diameter, height };
}

module.exports = diameterOfBinaryTree;