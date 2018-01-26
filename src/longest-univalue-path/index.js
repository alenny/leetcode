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
const longestUnivaluePath = function (root) {
    return root ? traverse(root).longest - 1 : 0;
};

function traverse(node) {
    if (!node) {
        return { longest: 0, longestToNode: 0 }
    }
    let left = traverse(node.left);
    let right = traverse(node.right);
    let longestToNodeFromLeft = node.left && node.left.val === node.val ? 1 + left.longestToNode : 1;
    let longestToNodeFromRight = node.right && node.right.val === node.val ? 1 + right.longestToNode : 1;
    let longest = Math.max(left.longest, right.longest, longestToNodeFromLeft + longestToNodeFromRight - 1);
    return { longest: longest, longestToNode: Math.max(longestToNodeFromLeft, longestToNodeFromRight) };
}

module.exports = longestUnivaluePath;