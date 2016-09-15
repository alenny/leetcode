var func = require('../src/power-of-two');
var assert = require('assert');
describe('power-of-two', function () {
    describe('#isPowerOfTwo()', function () {
        it('should return true when given 32', function () {
            var result = func(32);
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