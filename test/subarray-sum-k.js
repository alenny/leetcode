const func = require('../src/subarray-sum-k');
const assert = require('assert');
describe('subarray-sum-k', function () {
    describe('#subarraySum()', function () {
        it('should return 2 when numbers are [1, 1, 1] and k is 2', function () {
            let ret = func([1, 1, 1], 2);
            assert.equal(ret, 2);
        });
        it('should return 2 when numbers are [1, 2, 3] and k is 3', function () {
            let ret = func([1, 2, 3], 3);
            assert.equal(ret, 2);
        });
    });
});