const func = require('../src/lowest-common-ancestor');
const TreeNode = require('../src/_utils/tree-node');
const assert = require('assert');
describe('lowest-common-ancestor', function () {
    describe('#lowestCommonAncestor()', function () {
        it('should return 5 when tree is 3(5(6,2(7,4)),1(0,8)), p is 5 and q is 4', function () {
            let root = new TreeNode(3);
            root.left = new TreeNode(5);
            root.left.left = new TreeNode(6);
            root.left.right = new TreeNode(2);
            root.left.right.left = new TreeNode(7);
            root.left.right.right = new TreeNode(4);
            root.right = new TreeNode(1);
            root.right.left = new TreeNode(0);
            root.right.right = new TreeNode(8);
            let ret = func(root, root.left, root.left.right.right);
            assert.equal(ret.val, 5);
        });
    });
});