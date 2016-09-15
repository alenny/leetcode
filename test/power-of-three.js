var func = require('../src/power-of-three');
var assert = require('assert');
describe('power-of-three', function () {
    describe('#isPowerOfThree()', function () {
        it('should return true when given 243', function () {
            var result = func(243);
            assert.equal(true, result);
        });
        it('should return true when given 27', function () {
            var result = func(27);
            assert.equal(true, result);
        });
        it('should return false when given 0', function () {
            var result = func(0);
            assert.equal(false, result);
        });
        it('should return false when given 5', function () {
            var result = func(5);
            assert.equal(false, result);
        });
    });
});