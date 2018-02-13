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
const rightSideView = function (root) {
    if (!root) {
        return [];
    }
    let nodes = [root];
    let ret = [];
    while (nodes.length > 0) {
        let nextNodes = [];
        ret.push(nodes[nodes.length - 1].val);
        for (let node of nodes) {
            if (node.left) {
                nextNodes.push(node.left);
            }
            if (node.right) {
                nextNodes.push(node.right);
            }
        }
        nodes = nextNodes;
    }
    return ret;
};

module.exports = rightSideView;