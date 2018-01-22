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
const findBottomLeftValue = function (root) {
    let queue = [root];
    let bottomLeftValue;
    while (queue.length > 0) {
        let newQueue = [];
        bottomLeftValue = queue[0].val;
        for (let node of queue) {
            if (node.left) {
                newQueue.push(node.left);
            }
            if (node.right) {
                newQueue.push(node.right);
            }
        }
        queue = newQueue;
    }
    return bottomLeftValue;
};

module.exports = findBottomLeftValue;