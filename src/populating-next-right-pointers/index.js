/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
const connect = function (root) {
    if (!root || !root.left) {
        return;
    }
    connectLeftRight(root.left, root.right);
};

function connectLeftRight(left, right) {
    left.next = right;
    if (!left.left) {
        return;
    }
    connectLeftRight(left.left, left.right);
    connectLeftRight(left.right, right.left);
    connectLeftRight(right.left, right.right);
}

module.exports = connect;