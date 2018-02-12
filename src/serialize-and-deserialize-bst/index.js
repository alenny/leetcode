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
        return '';
    }
    let nodes = [root];
    let ret = '';
    while (nodes.length > 0) {
        let nextNodes = [];
        for (let i = 0; i < nodes.length; ++i) {
            ret += nodes[i].val + ',';
            if (nodes[i].left) {
                nextNodes.push(nodes[i].left);
            }
            if (nodes[i].right) {
                nextNodes.push(nodes[i].right);
            }
        }
        ret += '|';
        nodes = nextNodes;
    }
    return ret;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    if (data.length === 0) {
        return null;
    }
    let textLevels = data.split('|');
    let root = null;
    for (let textLevel of textLevels) {
        if (textLevel.length === 0) {
            break;
        }
        let textNodes = textLevel.split(',');
        for (let textNode of textNodes) {
            if (textNode.length === 0) {
                break;
            }
            let node = new TreeNode(Number.parseInt(textNode));
            if (!root) {
                root = node;
            } else {
                insertToBST(root, node);
            }
        }
    }
    return root;
};

function insertToBST(root, node) {
    if (node.val < root.val) {
        if (root.left) {
            insertToBST(root.left, node);
        } else {
            root.left = node;
        }
    } else {
        // node.val > root.val
        if (root.right) {
            insertToBST(root.right, node);
        } else {
            root.right = node;
        }
    }
}

module.exports = { serialize: serialize, deserialize: deserialize };

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */