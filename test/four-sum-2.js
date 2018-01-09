const func = require('../src/four-sum-2');
const assert = require('assert');
describe('four-sum-2', function () {
    describe('#fourSumCount()', function () {
        it('should return 2 when given [1,2],[-2,-1],[-1,2],[0,2]', function () {
            let ret = func([1, 2], [-2, -1], [-1, 2], [0, 2]);
            assert.equal(ret, 2);
        });
    });
});