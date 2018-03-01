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
class NodeInfo {
    constructor(node) {
        this.node = node;
        this.status = 0;
    }
}

const postorderTraversal = function (root) {
    if (!root) {
        return [];
    }
    let ret = [];
    let stack = [new NodeInfo(root)];
    while (stack.length > 0) {
        let item = stack[stack.length - 1];
        if (item.status === 0) {
            if (item.node.left) {
                stack.push(new NodeInfo(item.node.left));
            }
            item.status = 1;
        } else if (item.status === 1) {
            if (item.node.right) {
                stack.push(new NodeInfo(item.node.right));
            }
            item.status = 2;
        } else {
            // item.status === 2;
            ret.push(stack.pop().node.val);
        }
    }
    return ret;
};

module.exports = postorderTraversal;