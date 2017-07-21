const func = require('../src/single-number-2');
const assert = require('assert');
describe('single-number-2', function () {
    describe('#singleNumber()', function () {
        it('should return 3 when nums is [1,2,1,2,3,1,2]', function () {
            const result = func([1, 2, 1, 2, 3, 1, 2]);
            assert.equal(3, result);
        });
    });
});