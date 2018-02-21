/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
const TreeNode = require('../_utils/tree-node');

const sortedListToBST = function (head) {
    let values = [];
    let curr = head;
    while (curr) {
        values.push(curr.val);
        curr = curr.next;
    }
    return buildBST(values, 0, values.length - 1);
};

function buildBST(values, begin, end) {
    if (begin > end) {
        return null;
    }
    let mid = begin + end >> 1;
    let root = new TreeNode(values[mid]);
    root.left = buildBST(values, begin, mid - 1);
    root.right = buildBST(values, mid + 1, end);
    return root;
}

module.exports = sortedListToBST;