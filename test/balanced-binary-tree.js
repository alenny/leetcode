const func = require('../src/balanced-binary-tree');
const TreeNode = require('../src/balanced-binary-tree/tree-node');
const assert = require('assert');
describe('balanced-binary-tree', function () {
    describe('#isBalanced()', function () {
        it('should return true when given (3[2[1,],4])', function () {
            const root = new TreeNode(3);
            root.left = new TreeNode(2);
            root.right = new TreeNode(4);
            root.left.left = new TreeNode(1);
            const result = func(null, null);
            assert.equal(true, result);
        });
    });
});