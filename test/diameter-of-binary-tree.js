const func = require('../src/diameter-of-binary-tree');
const TreeNode = require('../src/diameter-of-binary-tree/tree-node');
const assert = require('assert');
describe('diameter-of-binary-tree', function () {
    describe('#diameterOfBinaryTree()', function () {
        it('should return 3 when given (1(2(4,5),3))', function () {
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.left.left = new TreeNode(4);
            root.left.right = new TreeNode(5);
            const result = func(root);
            assert.equal(3, result);
        });
    });
});