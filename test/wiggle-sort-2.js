const func = require('../src/wiggle-sort-2');
const assert = require('assert');
describe('wiggle-sort-2', function () {
    describe('#wiggleSort()', function () {
        it('should return [1,6,1,5,1,4] when given [1,5,1,1,6,4]', function () {
            let arr = [1, 5, 1, 1, 6, 4];
            func(arr);
            assert.deepEqual(arr, [1, 6, 1, 5, 1, 4]);
        });
        it('should return [5,6,4,5] when given [4,5,5,6]', function () {
            let arr = [4, 5, 5, 6];
            func(arr);
            assert.deepEqual(arr, [5, 6, 4, 5]);
        });
        it('should return [2,3,1,3,1,2] when given [1,3,2,2,3,1]', function () {
            let arr = [1, 3, 2, 2, 3, 1];
            func(arr);
            assert.deepEqual(arr, [2, 3, 1, 3, 1, 2]);
        });
    });
});