/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} t
 * @return {string}
 */
const tree2str = function (t) {
    return traverse(t);
};

function traverse(node) {
    if (!node) {
        return '';
    }
    let ret = node.val.toString();
    let left = traverse(node.left);
    let right = traverse(node.right);
    if (right.length > 0) {
        return ret + '(' + left + ')' + '(' + right + ')';
    }
    if (left.length > 0) {
        return ret + '(' + left + ')';
    }
    return ret;
}

module.exports = tree2str;