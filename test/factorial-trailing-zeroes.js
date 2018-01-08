const func = require('../src/factorial-trailing-zeroes');
const assert = require('assert');
describe('factorial-trailing-zeroes', function () {
    describe('#trailingZeroes()', function () {
        it("should return 3 when n is 17", function () {
            let ret = func(17);
            assert.equal(ret, 3);
        });
        it("should return 7 when n is 30", function () {
            let ret = func(30);
            assert.equal(ret, 7);
        });
        it("should return 12 when n is 50", function () {
            let ret = func(50);
            assert.equal(ret, 12);
        });
    });
});