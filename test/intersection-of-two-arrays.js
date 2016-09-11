var func = require('../src/intersection-of-two-arrays');
var assert = require('assert');
describe('intersection-of-two-arrays', function () {
    describe('#intersection()', function () {
        it('should return [2] when nums1 is [1, 2, 2, 1] and nums2 is [2, 2]', function () {
            var result = func([1, 2, 2, 1], [2, 2]);
            assert.deepEqual([2], result);
        });
    });
});

