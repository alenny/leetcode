const func = require('../src/symmetric-tree');
const TreeNode = require('../src/symmetric-tree/tree-node');
const assert = require('assert');
describe('symmetric-tree', function () {
    describe('#isSymmetric()', function () {
        it('should return true when root is null', function () {
            const result = func(null);
            assert.equal(true, result);
        });
        it('should return true when root is 1', function () {
            const root = new TreeNode(1);
            const result = func(root);
            assert.equal(true, result);
        });
        it('should return false when root is (1,[2,null])', function () {
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            const result = func(root);
            assert.equal(false, result);
        });
        it('should return true when root is (1,[2,2])', function () {
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(2);
            const result = func(root);
            assert.equal(true, result);
        });
    });
});