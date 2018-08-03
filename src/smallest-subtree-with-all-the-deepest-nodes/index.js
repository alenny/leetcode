/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
class Status {
    constructor() {
        this.first = null;
        this.last = null;
    }
}

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const subtreeWithAllDeepest = function (root) {
    if (!root) {
        return null;
    }
    let status = new Status();
    traverse(root, status, []);
    if (!status.last) {
        return status.first[status.first.length - 1];
    }
    let i = status.first.length - 1;
    while (i > 0 && status.first[i] !== status.last[i]) {
        --i;
    }
    return status.first[i];
};

function traverse(node, status, path) {
    path.push(node);
    if (!node.left && !node.right) {
        if (!status.first || path.length > status.first.length) {
            status.first = path.slice();
            status.last = null;
        } else if (path.length === status.first.length) {
            status.last = path.slice();
        }
    } else {
        if (node.left) {
            traverse(node.left, status, path);
        }
        if (node.right) {
            traverse(node.right, status, path);
        }
    }
    path.pop();
}

module.exports = subtreeWithAllDeepest;