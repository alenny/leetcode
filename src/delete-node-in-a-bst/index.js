/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
const deleteNode = function (root, key) {
    let node = root, parent = null, isLeft;
    while (node) {
        if (node.val === key) {
            break;
        }
        parent = node;
        if (key < node.val) {
            node = node.left;
            isLeft = true;
        } else {
            node = node.right;
            isLeft = false;
        }
    }
    if (!node) {
        return root;
    }
    let subRoot = deleteFromBST(node);
    if (!parent) {
        return subRoot;
    }
    if (isLeft) {
        parent.left = subRoot;
    } else {
        parent.right = subRoot;
    }
    return root;
};

function deleteFromBST(node, parent) {
    if (node.left) {
        let n = node.left;
        while (n.right) {
            n = n.right;
        }
        n.right = node.right;
        return node.left;
    }
    return node.right;
}

module.exports = deleteNode;