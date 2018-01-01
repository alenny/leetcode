/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const TreeNode = require('../_utils/tree-node');

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    if (!root) {
        return 'n';
    }
    let data = root.val.toString();
    let queue = [root.left, root.right];
    while (queue.length > 0) {
        let curr = queue.shift();
        if (curr === null) {
            data += ',n';
        } else {
            data += ',' + curr.val;
            queue.push(curr.left);
            queue.push(curr.right);
        }
    }
    return data;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let nodes = data.split(',');
    if (nodes[0] === 'n') {
        return null;
    }
    let root = new TreeNode(Number.parseInt(nodes[0]));
    let queue = [root];
    let curr = 1;
    while (queue.length > 0) {
        let parent = queue.shift();
        let leftNode = nodes[curr++];
        if (leftNode !== 'n') {
            parent.left = new TreeNode(Number.parseInt(leftNode));
            queue.push(parent.left);
        }
        let rightNode = nodes[curr++];
        if (rightNode !== 'n') {
            parent.right = new TreeNode(Number.parseInt(rightNode));
            queue.push(parent.right);
        }
    }
    return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

module.exports = { serialize: serialize, deserialize: deserialize };