const func = require('../src/single-number');
const assert = require('assert');
describe('single-number', function () {
    describe('#singleNumber()', function () {
        it('should return 3 when nums is [1,2,1,3,2]', function () {
            const result = func([1, 2, 1, 3, 2]);
            assert.equal(3, result);
        });
    });
});