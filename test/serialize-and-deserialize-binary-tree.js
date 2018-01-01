const funcs = require('../src/serialize-and-deserialize-binary-tree');
const TreeNode = require('../src/_utils/tree-node');
const assert = require('assert');
describe('serialize-and-deserialize-binary-tree', function () {
    describe('#serialize&deserialize()', function () {
        it('should return data as "1,2,3,n,n,4,5,n,n,n,n" when tree is 1(2,3(4,5))', function () {
            let root = new TreeNode(1);
            root.left = new TreeNode(2);
            root.right = new TreeNode(3);
            root.right.left = new TreeNode(4);
            root.right.right = new TreeNode(5);
            let data = funcs.serialize(root);
            assert.equal(data, "1,2,3,n,n,4,5,n,n,n,n");
            let newRoot = funcs.deserialize(data);
            assert.equal(newRoot.val, 1);
            assert.equal(newRoot.left.val, 2);
            assert.equal(newRoot.right.val, 3);
            assert.equal(newRoot.right.left.val, 4);
            assert.equal(newRoot.right.right.val, 5);
        });
    });
});