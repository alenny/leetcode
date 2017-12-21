const func = require('../src/max-product-subarray');
const assert = require('assert');
describe('max-product-subarray', function () {
    describe('#maxProduct()', function () {
        it("should return 6 when numbers are [2,3,-2,4]", function () {
            let ret = func([2, 3, -2, 4]);
            assert.equal(ret, 6);
        });
    });
});