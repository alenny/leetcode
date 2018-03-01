/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
const connect = function (root) {
    let levelHead = root;
    while (levelHead) {
        let nextLevelHead = null;
        let prev = null;
        let curr = levelHead;
        while (curr) {
            if (!prev) {
                if (curr.left) {
                    prev = nextLevelHead = curr.left;
                } else if (curr.right) {
                    prev = nextLevelHead = curr.right;
                }
            } else {
                if (curr.left) {
                    prev.next = curr.left;
                } else if (curr.right) {
                    prev.next = curr.right;
                }
            }
            if (curr.left && curr.right) {
                curr.left.next = curr.right;
            }
            if (curr.right) {
                prev = curr.right;
            } else if (curr.left) {
                prev = curr.left;
            }
            curr = curr.next;
        }
        levelHead = nextLevelHead;
    }
};

module.exports = connect;