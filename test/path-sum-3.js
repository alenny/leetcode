const func = require('../src/path-sum-3');
const TreeNode = require('../src/_utils/tree-node');
const assert = require('assert');
describe('path-sum-3', function () {
    describe('#pathSum()', function () {
        it('should return 3 when tree is (10[5[3[3,-2],2[,1]],-3[,11]]) and sum is 8', function () {
            const root = new TreeNode(10);
            root.left = new TreeNode(5);
            root.right = new TreeNode(-3);
            root.left.left = new TreeNode(3);
            root.left.right = new TreeNode(2);
            root.left.left.left = new TreeNode(3);
            root.left.left.right = new TreeNode(-2);
            root.left.right.right = new TreeNode(1);
            root.right.right = new TreeNode(11);
            const result = func(root, 8);
            assert.equal(3, result);
        });
    });
});