const func = require('../src/kth-largest-element');
const assert = require('assert');
describe('kth-largest-element', function () {
    describe('#findKthLargest()', function () {
        it('should return 5 when numbers are [3,2,1,5,6,4] and k is 2', function () {
            let ret = func([3, 2, 1, 5, 6, 4], 2);
            assert.equal(ret, 5);
        });
        it('should return 1 when numbers are [1] and k is 1', function () {
            let ret = func([1], 1);
            assert.equal(ret, 1);
        });
    });
});