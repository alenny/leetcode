const func = require('../src/flatten-binary-tree-to-linked-list');
const assert = require('assert');
const TreeNode = require('../src/_utils/tree-node')
describe('flatten-binary-tree-to-linked-list', function () {
    describe('#flatten()', function () {
        it('should return [1,2,3,4,5,6] when given 1(2(3,4),5(,6))', function () {
            let root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.left.left = new TreeNode(3);
            root.left.right = new TreeNode(4);
            root.right = new TreeNode(5);
            root.right.right = new TreeNode(6);
            func(root);
            assert.equal(root.right.right.right.right.right.val, 6);
        });
        it('should return [1,2,3] when given 1(2(3,),)', function () {
            let root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.left.left = new TreeNode(3);
            func(root);
            assert.equal(root.right.val, 2);
            assert.equal(root.right.right.val, 3);
        });
    });
});