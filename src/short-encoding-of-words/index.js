class TreeNode {
    constructor() {
        this.children = new Map();
    }
}

/**
 * @param {string[]} words
 * @return {number}
 */
const minimumLengthEncoding = function (words) {
    if (words.length === 0) {
        return 0;
    }
    let root = new TreeNode();
    for (let w of words) {
        let node = root;
        for (let i = w.length - 1; i >= 0; --i) {
            let ch = w[i];
            let chNode = node.children.get(ch);
            if (!chNode) {
                chNode = new TreeNode();
                node.children.set(ch, chNode);
            }
            node = chNode;
        }
    }
    let queue = [root], level = 0, length = 0;
    while (queue.length > 0) {
        let nextQueue = [];
        for (let node of queue) {
            if (node.children.size === 0) {
                length += level + 1;
            } else {
                node.children.forEach(n => nextQueue.push(n));
            }
        }
        queue = nextQueue;
        ++level;
    }
    return length;
};

module.exports = minimumLengthEncoding;