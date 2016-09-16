var Class = require('../src/range-sum-query');
var assert = require('assert');
describe('range-sum-query', function () {
    describe('[-2, 0, 3, -5, 2, -1]', function () {
        var numArray = new Class([-2, 0, 3, -5, 2, -1]);
        it('should return 1 when given range 0,2', function () {
            var result = numArray.sumRange(0, 2);
            assert.equal(1, result);
        });
        it('should return -1 when given range 2,5', function () {
            var result = numArray.sumRange(2, 5);
            assert.equal(-1, result);
        });
        it('should return -3 when given range 0,5', function () {
            var result = numArray.sumRange(0, 5);
            assert.equal(-3, result);
        });
    });
});