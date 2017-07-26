const func = require('../src/convert-bst-to-greater-tree');
const TreeNode = require('../src/convert-bst-to-greater-tree/tree-node');
const assert = require('assert');
describe('convert-bst-to-greater-tree', function () {
    describe('#convertBST()', function () {
        it('should return (18[20,13]) when given (5[2,13])', function () {
            const root = new TreeNode(5);
            root.left = new TreeNode(2);
            root.right = new TreeNode(13);
            const result = func(root);
            assert.equal(18, result.val);
            assert.equal(20, result.left.val);
            assert.equal(13, result.right.val);
        });
    });
});