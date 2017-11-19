const func = require('../src/binary-tree-level-order');
const TreeNode = require('../src/_utils/tree-node')
const assert = require('assert');
describe('binary-tree-level-order', function () {
    describe('#levelOrder()', function () {
        it('should return [[3],[9,20],[15,7]] when tree is [3,9,20,null,null,15,7]', function () {
            let root = new TreeNode(3);
            root.left = new TreeNode(9);
            root.right = new TreeNode(20);
            root.right.left = new TreeNode(15);
            root.right.right = new TreeNode(7);
            let ret = func(root);
            assert.equal(ret.length, 3);
            assert.equal(ret[0][0], 3);
            assert.equal(ret[1][0], 9);
            assert.equal(ret[1][1], 20);
            assert.equal(ret[2][0], 15);
            assert.equal(ret[2][1], 7);
        });
    });
});