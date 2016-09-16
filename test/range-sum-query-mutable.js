var Class = require('../src/range-sum-query-mutable');
var assert = require('assert');
describe('range-sum-query-mutable', function () {
    describe('[1,3,5]', function () {
        var numArray = new Class([1, 3, 5]);
        it('should return 9 when given range 0,2', function () {
            var result = numArray.sumRange(0, 2);
            assert.equal(9, result);
        });
        it('should return 8 when given range 0,2 after update(1,2)', function () {
            numArray.update(1, 2);
            var result = numArray.sumRange(0, 2);
            assert.equal(8, result);
        });
    });
    describe('[9,-8]', function () {
        var numArray = new Class([9, -8]);
        it('should return -8 when given range 1,1 after update(0,3)', function () {
            numArray.update(0, 3);
            var result = numArray.sumRange(1, 1);
            assert.equal(-8, result);
        });
    });
});