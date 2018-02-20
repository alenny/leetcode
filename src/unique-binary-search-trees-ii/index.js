/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
const generateTrees = function (n) {
    if (n === 0) {
        return [];
    }
    return buildHelper(1, n);
};

function buildHelper(begin, end) {
    if (begin > end) {
        return [null];
    }
    let ret = [];
    for (let curr = begin; curr <= end; ++curr) {
        let lefts = buildHelper(begin, curr - 1);
        let rights = buildHelper(curr + 1, end);
        for (let left of lefts) {
            for (let right of rights) {
                let root = new TreeNode(curr);
                root.left = left;
                root.right = right;
                ret.push(root);
            }
        }
    }
    return ret;
}

module.exports = generateTrees;