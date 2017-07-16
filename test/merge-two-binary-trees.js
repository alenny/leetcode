const func = require('../src/merge-two-binary-trees');
const TreeNode = require('../src/merge-two-binary-trees/tree-node');
const assert = require('assert');
describe('merge-two-binary-trees', function () {
    describe('#mergeTrees()', function () {
        it('should return null when t1 and t2 are both null', function () {
            const result = func(null, null);
            assert.equal(null, result);
        });
        it('should return (3, [3, 6]) when t1 is (1, [null, 2]) and t2 is (2, [3, 4])', function () {
            const t1 = new TreeNode(1);
            t1.right = new TreeNode(2);
            const t2 = new TreeNode(2);
            t2.left = new TreeNode(3);
            t2.right = new TreeNode(4);
            const result = func(t1, t2);
            assert.equal(3, result.val);
            assert.equal(3, result.left.val);
            assert.equal(6, result.right.val);
        });
    });
});