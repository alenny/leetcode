/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
const pathSum = function (root, sum) {
    if (!root) {
        return [];
    }
    let ret = [];
    traverse(root, sum, ret, []);
    return ret;
};

function traverse(node, sum, ret, curr) {
    curr.push(node.val);
    let newSum = sum - node.val;
    if (!node.left && !node.right && newSum === 0) {
        ret.push(curr.slice());
    } else {
        if (node.left) {
            traverse(node.left, newSum, ret, curr);
        }
        if (node.right) {
            traverse(node.right, newSum, ret, curr);
        }
    }
    curr.pop();
}

module.exports = pathSum;

