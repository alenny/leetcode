const func = require('../src/target-sum');
const assert = require('assert');
describe('target-sum', function () {
    describe('#findTargetSumWays()', function () {
        it('should return 0 when numbers are [1] and S is 2', function () {
            let ret = func([1, 1, 1, 1, 1], 3);
            assert.equal(ret, 5);
        });
        it('should return 0 when numbers are [1,2,7,9,981] and S is 1000000000', function () {
            let ret = func([1, 1, 1, 1, 1], 3);
            assert.equal(ret, 5);
        });
        it('should return 5 when numbers are [1,1,1,1,1] and S is 3', function () {
            let ret = func([1, 1, 1, 1, 1], 3);
            assert.equal(ret, 5);
        });
    });
});