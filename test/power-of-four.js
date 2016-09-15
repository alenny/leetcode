var func = require('../src/power-of-four');
var assert = require('assert');
describe('power-of-four', function () {
    describe('#isPowerOfFour()', function () {
        it('should return true when given 16', function () {
            var result = func(16);
            assert.equal(true, result);
        });
        it('should return false when given 8', function () {
            var result = func(8);
            assert.equal(false, result);
        });
        it('should return false when given 5', function () {
            var result = func(5);
            assert.equal(false, result);
        });
        it('should return false when given 0', function () {
            var result = func(0);
            assert.equal(false, result);
        });
    });
});