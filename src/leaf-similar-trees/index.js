/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
const leafSimilar = function (root1, root2) {
    let leaves1 = [], leaves2 = [];
    traverse(root1, leaves1);
    traverse(root2, leaves2);
    return compare(leaves1, leaves2);
};

function compare(l1, l2) {
    if (l1.length !== l2.length) {
        return false;
    }
    for (let i = 0; i < l1.length; ++i) {
        if (l1[i] !== l2[i]) {
            return false;
        }
    }
    return true;
}

function traverse(node, leaves) {
    if (!node) {
        return;
    }
    if (!node.left && !node.right) {
        leaves.push(node.val);
    }
    traverse(node.left, leaves);
    traverse(node.right, leaves);
}

module.exports = leafSimilar;