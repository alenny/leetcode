const HeapNode = require('../../src/_utils/heap-node');
const MaxHeap = require('../../src/_utils/max-heap');
const assert = require('assert');
describe('max-heap', function () {
    describe('#pop()', function () {
        it('should return 3 then 7,6,2,1 when inserting 2,3,1 and then 7,6', function () {
            const maxHeap = new MaxHeap();
            maxHeap.insert(new HeapNode(2));
            maxHeap.insert(new HeapNode(3));
            maxHeap.insert(new HeapNode(1));
            assert.equal(maxHeap.pop().value, 3);
            maxHeap.insert(new HeapNode(7));
            maxHeap.insert(new HeapNode(6));
            assert.equal(maxHeap.pop().value, 7);
            assert.equal(maxHeap.pop().value, 6);
            assert.equal(maxHeap.pop().value, 2);
            assert.equal(maxHeap.pop().value, 1);
        });
    });
});