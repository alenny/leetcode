/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
const widthOfBinaryTree = function (root) {
    if (!root) {
        return 0;
    }
    let maxWidth = 0;
    let queue = [{ node: root, idx: 0 }];
    while (queue.length > 0) {
        maxWidth = Math.max(maxWidth, queue[queue.length - 1].idx - queue[0].idx + 1);
        let nextQueue = [];
        for (let item of queue) {
            if (item.node.left) {
                nextQueue.push({ node: item.node.left, idx: item.idx << 1 });
            }
            if (item.node.right) {
                nextQueue.push({ node: item.node.right, idx: (item.idx << 1) + 1 });
            }
        }
        queue = nextQueue;
    }
    return maxWidth;
};

module.exports = widthOfBinaryTree;