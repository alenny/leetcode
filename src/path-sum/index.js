/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
const hasPathSum = function (root, sum) {
    return root ? traverse(root, sum, 0) : false;
};

function traverse(node, sum, pathSum) {
    pathSum += node.val;
    if (sum === pathSum && !node.left && !node.right) {
        return true;
    }
    if (node.left && traverse(node.left, sum, pathSum) || node.right && traverse(node.right, sum, pathSum)) {
        return true;
    }
    pathSum -= node.val;
    return false;
}

module.exports = hasPathSum;