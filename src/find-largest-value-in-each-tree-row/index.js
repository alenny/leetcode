/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const largestValues = function (root) {
    if (!root) {
        return [];
    }
    let ret = [];
    let queue = [root];
    while (queue.length > 0) {
        let max = Number.NEGATIVE_INFINITY;
        let newQueue = [];
        while (queue.length > 0) {
            let node = queue.pop();
            max = Math.max(max, node.val);
            if (node.left) {
                newQueue.push(node.left);
            }
            if (node.right) {
                newQueue.push(node.right);
            }
        }
        ret.push(max);
        queue = newQueue;
    }
    return ret;
};

module.exports = largestValues;