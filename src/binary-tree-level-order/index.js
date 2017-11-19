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
const levelOrder = function (root) {
    let ret = [];
    levelOrderHelper(root, ret, 0);
    return ret;
};

function levelOrderHelper(node, ret, level) {
    if (!node) {
        return;
    }
    if (!ret[level]) {
        ret[level] = [];
    }
    ret[level].push(node.val);
    levelOrderHelper(node.left, ret, level + 1);
    levelOrderHelper(node.right, ret, level + 1);
}

module.exports = levelOrder;