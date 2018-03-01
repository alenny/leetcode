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
const countNodes = function (root) {
    if (!root) {
        return 0;
    }
    let heightLeft = getHeightLeft(root, 0);
    let heightRight = getHeightRight(root, 0);
    if (heightLeft === heightRight) {
        return Math.pow(2, heightLeft) - 1;
    }
    return countNodes(root.left) + countNodes(root.right) + 1;
};

function getHeightLeft(node, startHeight) {
    while (node) {
        ++startHeight;
        node = node.left;
    }
    return startHeight;
}

function getHeightRight(node, startHeight) {
    while (node) {
        ++startHeight;
        node = node.right;
    }
    return startHeight;
}

module.exports = countNodes;