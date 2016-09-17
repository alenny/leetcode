var func = require('../src/invert-binary-tree');
var TreeNode = require('../src/invert-binary-tree/tree-node');
var assert = require('assert');
describe('invert-binary-tree', function () {
    describe('#invertTree()', function () {
        it('should return correct result when given a binary tree', function () {
            var root = new TreeNode(4);
            root.left = new TreeNode(2);
            root.left.left = new TreeNode(1);
            root.left.right = new TreeNode(3);
            root.right = new TreeNode(7);
            root.right.left = new TreeNode(6);
            root.right.right = new TreeNode(9);
            var result = func(root);
            assert.equal(7, result.left.val);
            assert.equal(9, result.left.left.val);
            assert.equal(6, result.left.right.val);
            assert.equal(2, result.right.val);
            assert.equal(3, result.right.left.val);
            assert.equal(1, result.right.right.val);
        });
    });
});