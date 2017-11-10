const func = require('../src/product-of-array-except-self');
const assert = require('assert');
describe('product-of-array-except-self', function () {
    describe('#productExceptSelf()', function () {
        it('should return [24,12,8,6] when given [1,2,3,4]', function () {
            var result = func([1, 2, 3, 4]);
            assert.equal(result.length, 4);
            assert.equal(result[0], 24);
            assert.equal(result[1], 12);
            assert.equal(result[2], 8);
            assert.equal(result[3], 6);
        });
    });
});