const MaxHeap = require('../../src/_utils/max-heap');
const assert = require('assert');
describe('max-heap', function () {
    describe('#pop()', function () {
        it('should return 7,6,3,2,1 when inserting 2,3,1,7,6', function () {
            const maxHeap = new MaxHeap();
            maxHeap.insert(2);
            maxHeap.insert(3);
            maxHeap.insert(1);
            maxHeap.insert(7);
            maxHeap.insert(6);
            assert.equal(maxHeap.pop(), 7);
            assert.equal(maxHeap.pop(), 6);
            assert.equal(maxHeap.pop(), 3);
            assert.equal(maxHeap.pop(), 2);
            assert.equal(maxHeap.pop(), 1);
        });
    });
});