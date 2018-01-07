const func = require('../src/same-tree');
const TreeNode = require('../src/_utils/tree-node');
const assert = require('assert');
describe('same-tree', function () {
    describe('#isSameTree()', function () {
        it('should return true when p and q are both 1(2,3)', function () {
            let p = new TreeNode(1);
            p.left = new TreeNode(2);
            p.right = new TreeNode(3);
            let q = new TreeNode(1);
            q.left = new TreeNode(2);
            q.right = new TreeNode(3);
            const ret = func(p, q);
            assert.equal(ret, true);
        });
        it('should return false when p is 1(2,) and q is 1(,2)', function () {
            let p = new TreeNode(1);
            p.left = new TreeNode(2);
            let q = new TreeNode(1);
            q.right = new TreeNode(2);
            let ret = func(p, q);
            assert.equal(ret, false);
        });
    });
});