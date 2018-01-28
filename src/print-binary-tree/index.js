/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[][]}
 */
const printTree = function (root) {
    let level = getLevel(root);
    let rows = level;
    let cols = Math.pow(2, level) - 1;
    let ret = new Array(rows);
    for (let i = 0; i < rows; ++i) {
        ret[i] = new Array(cols);
        ret[i].fill('');
    }
    print(root, ret, 0, 0, cols - 1);
    return ret;
};

function getLevel(node) {
    if (!node) {
        return 0;
    }
    return Math.max(getLevel(node.left), getLevel(node.right)) + 1;
}

function print(node, ret, row, colBegin, colEnd) {
    if (!node) {
        return;
    }
    let mid = colBegin + colEnd >> 1;
    ret[row][mid] = node.val.toString();
    print(node.left, ret, row + 1, colBegin, mid - 1);
    print(node.right, ret, row + 1, mid + 1, colEnd);
}

module.exports = printTree;