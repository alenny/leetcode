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
const findSecondMinimumValue = function (root) {
    if (!root || !root.left) {
        return -1;
    }
    let stack = [root.left, root.right];
    let smallest = root.val, secondCandidate = Number.POSITIVE_INFINITY;
    let popCount;
    while (stack.length > 0) {
        let node = stack.pop();
        if (node.val === smallest) {
            if (node.left) {
                stack.push(node.left, node.right);
            }
        } else if (node.val < secondCandidate) {
            secondCandidate = node.val;
        }
    }
    return secondCandidate === Number.POSITIVE_INFINITY ? -1 : secondCandidate;
};

module.exports = findSecondMinimumValue;