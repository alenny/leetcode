const func = require('../src/increasing-triplet-subsequence');
const assert = require('assert');
describe('increasing-triplet-subsequence', function () {
    describe('#increasingTriplet()', function () {
        it('should return true when given [1,2,3,4,5]', function () {
            let ret = func([1, 2, 3, 4, 5]);
            assert.equal(ret, true);
        });
        it('should return false when given [5,4,3,2,1]', function () {
            let ret = func([5, 4, 3, 2, 1]);
            assert.equal(ret, false);
        });
        it('should return true when given [1,2,-10,-8,-7]', function () {
            let ret = func([1, 2, -10, -8, -7]);
            assert.equal(ret, true);
        });
    });
});