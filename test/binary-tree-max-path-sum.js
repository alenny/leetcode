const func = require('../src/binary-tree-max-path-sum');
const TreeNode = require('../src/_utils/tree-node');
const assert = require('assert');
describe('binary-tree-max-path-sum', function () {
    describe('#maxPathSum()', function () {
        it('should return 6 when given 1(2,3)', function () {
            let root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            const ret = func(root);
            assert.equal(ret, 6);
        });
    });
});