const func = require('../src/max-depth-of-binary-tree');
const TreeNode = require('../src/max-depth-of-binary-tree/tree-node');
const assert = require('assert');
describe('max-depth-of-binary-tree', function () {
    describe('#maxDepth()', function () {
        it('should return 0 when root is null', function () {
            const result = func(null);
            assert.equal(0, result);
        });
        it('should return 1 when root is 1', function () {
            const root = new TreeNode(1);
            const result = func(root);
            assert.equal(1, result);
        });
        it('should return 2 when root is (1,[null,2])', function () {
            const root = new TreeNode(1);
            root.right = new TreeNode(2);
            const result = func(root);
            assert.equal(2, result);
        });
        it('should return 2 when root is (1,[2,3])', function () {
            const root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            const result = func(root);
            assert.equal(2, result);
        });
    });
});