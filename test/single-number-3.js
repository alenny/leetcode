const func = require('../src/single-number-3');
const assert = require('assert');
describe('single-number-3', function () {
    describe('#singleNumber()', function () {
        it('should return [3,5] when nums is [1, 2, 1, 3, 2, 5]', function () {
            const result = func([1, 2, 1, 3, 2, 5]);
            assert.equal(2, result.length);
            assert.equal(3, result[0]);
            assert.equal(5, result[1]);
        });
    });
});