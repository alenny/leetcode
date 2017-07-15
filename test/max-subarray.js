const func = require('../src/max-subarray');
const assert = require('assert');
describe('max-subarray', function () {
    describe('#maxSubarray()', function () {
        it('should return 1 when nums is [1]', function () {
            const result = func([1]);
            assert.equal(1, result);
        });
        it('should return [0] when nums is [0,1,-1,2]', function () {
            const result = func([-3, 1, -1, 2]);
            assert.equal(2, result);
        });
    });
});