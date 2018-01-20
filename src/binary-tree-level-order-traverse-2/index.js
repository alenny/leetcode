/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrderBottom = function (root) {
    if (!root) {
        return [];
    }
    let queue = [root];
    let ret = [];
    while (queue.length > 0) {
        let arr = [];
        let newQueue = [];
        for (let node of queue) {
            arr.push(node.val);
            if (node.left) {
                newQueue.push(node.left);
            }
            if (node.right) {
                newQueue.push(node.right);
            }
        }
        ret.push(arr);
        queue = newQueue;
    }
    return ret.reverse();
};

module.exports = levelOrderBottom;