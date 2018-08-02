/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} K
 * @return {number[]}
 */
const distanceK = function (root, target, K) {
    let results = new Set();
    traverse(root, NaN, results, target, K);
    return Array.from(results.keys());
};

function traverse(node, dist, results, target, K) {
    if (!node) {
        return dist - 1;
    }
    if (node === target) {
        dist = 0;
    }
    let lDist = traverse(node.left, dist + 1, results, target, K);
    let rDist = traverse(node.right, lDist + 1, results, target, K);
    if (isNaN(lDist) && !isNaN(rDist)) {
        traverse(node.left, rDist + 1, results, target, K);
    }
    if (rDist === K) {
        results.add(node.val);
    }
    return dist > 0 ? dist - 1 : rDist + 1;
}

module.exports = distanceK;