const HeapNode = require('../../src/_utils/heap-node');
const MinHeap = require('../../src/_utils/min-heap');
const assert = require('assert');
describe('min-heap', function () {
    describe('#pop()', function () {
        it('should return 1 then 2,3,6,7 when inserting 2,3,1 and then 7,6', function () {
            const minHeap = new MinHeap();
            minHeap.insert(new HeapNode(2));
            minHeap.insert(new HeapNode(3));
            minHeap.insert(new HeapNode(1));
            assert.equal(minHeap.pop().value, 1);
            minHeap.insert(new HeapNode(7));
            minHeap.insert(new HeapNode(6));
            assert.equal(minHeap.pop().value, 2);
            assert.equal(minHeap.pop().value, 3);
            assert.equal(minHeap.pop().value, 6);
            assert.equal(minHeap.pop().value, 7);
            assert.equal(minHeap.pop(), undefined);
        });
    });
});