const func = require('../src/partition-equal-subset-sum');
const assert = require('assert');
describe('partition-equal-subset-sum', function () {
    describe('#canPartition()', function () {
        it('should return true when numbers are [1, 5, 11, 5]', function () {
            let ret = func([1, 5, 11, 5]);
            assert.equal(ret, true);
        });
        it('should return false when numbers are [1, 2, 3, 5]', function () {
            let ret = func([1, 2, 3, 5]);
            assert.equal(ret, false);
        });
    });
});