const func = require('../src/sub-tree-of-another-tree');
const TreeNode = require('../src/sub-tree-of-another-tree/tree-node');
const assert = require('assert');
describe('sub-tree-of-another-tree', function () {
    describe('#isSubtree()', function () {
        it('should return true when s and t are both (1)', function () {
            const s = new TreeNode(1);
            const result = func(s, s);
            assert.equal(true, result);
        });
        it('should return false when s is (1) and t is (2)', function () {
            const s = new TreeNode(1);
            const t = new TreeNode(2);
            const result = func(s, t);
            assert.equal(false, result);
        });
    });
});