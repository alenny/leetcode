const func = require('../src/convert-sorted-array-to-bst');
const TreeNode = require('../src/convert-sorted-array-to-bst/tree-node');
const assert = require('assert');
describe('convert-sorted-array-to-bst', function () {
    describe('#sortedArrayToBST()', function () {
        it('should return (3[2[1,],4]) when nums is [1,2,3,4]', function () {
            const result = func([1, 2, 3, 4]);
            assert.equal(3, result.val);
            assert.equal(2, result.left.val);
            assert.equal(1, result.left.left.val);
            assert.equal(4, result.right.val);
        });
    });
});