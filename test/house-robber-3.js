const func = require('../src/house-robber-3');
const TreeNode = require('../src/_utils/tree-node');
const assert = require('assert');
describe('house-robber-3', function () {
    describe('#rob()', function () {
        it('should return 7 when houses are (3(2(null,3),3(null,1)))', function () {
            let root = new TreeNode(3);
            root.left = new TreeNode(2);
            root.left.right = new TreeNode(3);
            root.right = new TreeNode(3);
            root.right.right = new TreeNode(1);
            const result = func(root);
            assert.equal(7, result);
        });
    });
});