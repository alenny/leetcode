/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
const isSubtree = function (s, t) {
    if (s === null) {
        return false;
    }
    if (s.val === t.val && areConsistent(s, t)) {
        return true;
    }
    return isSubtree(s.left, t) || isSubtree(s.right, t);
};

const areConsistent = function (t1, t2) {
    if (t1 === null && t2 === null) {
        return true;
    }
    if (t1 === null || t2 === null || t1.val !== t2.val) {
        return false;
    }
    return areConsistent(t1.left, t2.left) && areConsistent(t1.right, t2.right);
};

module.exports = isSubtree;