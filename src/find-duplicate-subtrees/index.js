/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode[]}
 */
const findDuplicateSubtrees = function (root) {
    let pathMap = new Map();
    traverse(root, pathMap);
    let ret = [];
    for (let col of pathMap.values()) {
        if (col.length > 1) {
            ret.push(col[0]);
        }
    }
    return ret;
};

function traverse(node, pathMap) {
    let currRet = { preOrder: '', inOrder: '' };
    if (!node) {
        return currRet;
    }
    currRet.preOrder = currRet.inOrder = node.val.toString();
    let leftRet = traverse(node.left, pathMap);
    let rightRet = traverse(node.right, pathMap);
    if (leftRet.preOrder.length > 0) {
        currRet.preOrder += 'l' + leftRet.preOrder;
        currRet.inOrder = leftRet.inOrder + 'l' + currRet.inOrder;
    }
    if (rightRet.preOrder.length > 0) {
        currRet.preOrder += 'r' + rightRet.preOrder;
        currRet.inOrder += 'r' + rightRet.inOrder;
    }
    let pathKey = currRet.preOrder + '|' + currRet.inOrder;
    let col = pathMap.get(pathKey);
    if (!col) {
        pathMap.set(pathKey, [node]);
    } else {
        col.push(node);
    }
    return currRet;
}

module.exports = findDuplicateSubtrees;