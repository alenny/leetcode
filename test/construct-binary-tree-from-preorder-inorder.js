const func = require('../src/construct-binary-tree-from-preorder-inorder');
const assert = require('assert');
const TreeNode = require('../src/_utils/tree-node');
describe('construct-binary-tree-from-preorder-inorder', function () {
    describe('#buildTree()', function () {
        it('should return 1(2(4,5),3) when preorder is [1,2,4,5,3] and inorder is [4,2,5,1,3]', function () {
            let ret = func([1, 2, 4, 5, 3], [4, 2, 5, 1, 3]);
            assert.equal(ret.val, 1);
            assert.equal(ret.left.val, 2);
            assert.equal(ret.right.val, 3);
            assert.equal(ret.left.left.val, 4);
            assert.equal(ret.left.right.val, 5);
        });
    });
});