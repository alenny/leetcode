class BSTIterator {
    /**
     * @constructor
     * @param {TreeNode} root - root of the binary search tree
     */
    constructor(root) {
        this.stack = [];
        let node = root;
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
    }
    /**
     * @this BSTIterator
     * @returns {boolean} - whether we have a next smallest number
     */
    hasNext() {
        return this.stack.length > 0;
    }
    /**
     * @this BSTIterator
     * @returns {number} - the next smallest number
     */
    next() {
        let node = this.stack.pop();
        let retVal = node.val;
        node = node.right;
        while (node) {
            this.stack.push(node);
            node = node.left;
        }
        return retVal;
    }
};

module.exports = BSTIterator;

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
*/