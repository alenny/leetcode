const func = require('../src/kth-smallest-in-sorted-matrix');
const assert = require('assert');
describe('kth-smallest-in-sorted-matrix', function () {
    describe('#kthSmallest()', function () {
        it('should return 13 when matrix is [[1,5,9],[10,11,13],[12,13,15]] and k is 8', function () {
            let ret = func([[1, 5, 9], [10, 11, 13], [12, 13, 15]], 8);
            assert.equal(ret, 13);
        });
    });
});