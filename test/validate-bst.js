const func = require('../src/validate-bst');
const TreeNode = require('../src/_utils/tree-node');
const assert = require('assert');
describe('validate-bst', function () {
    describe('#isValidBST()', function () {
        it("should return true when given 2(1,3)", function () {
            let root = new TreeNode(2);
            root.left = new TreeNode(1);
            root.right = new TreeNode(3);
            let ret = func(root);
            assert.equal(ret, true);
        });
        it("should return false when given 1(2,3)", function () {
            let root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            let ret = func(root);
            assert.equal(ret, false);
        });
        it("should return true when given 0", function () {
            let root = new TreeNode(0);
            let ret = func(root);
            assert.equal(ret, true);
        });
    });
});