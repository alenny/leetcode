/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */
const findTarget = function (root, k) {
    return helper(root, root, k);
};

function helper(root, curr, k) {
    if (!curr) {
        return false;
    }
    if (helper(root, curr.left, k)) {
        return true;
    }
    let val1 = k - curr.val;
    if (val1 < curr.val) {
        return false;
    }
    if (find(root, curr, val1)) {
        return true;
    }
    return helper(root, curr.right, k);
}

function find(root, except, target) {
    if (!root) {
        return false;
    }
    if (root.val === target && root !== except) {
        return true;
    }
    return root.val > target ? find(root.left, except, target) : find(root.right, except, target);
}

module.exports = findTarget;