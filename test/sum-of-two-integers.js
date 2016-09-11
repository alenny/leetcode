var getSum = require('../src/sum-of-two-integers');
var assert = require('assert');
describe('sum-of-two-integers', function () {
    describe('#getSum()', function () {
        it('should return 3 when a is 1 and b is 2', function () {
            var result = getSum(1, 2);
            assert.equal(3, result);
        });
        it('should return 5 when a is 2 and b is 3', function () {
            var result = getSum(2, 3);
            assert.equal(5, result);
        });
    });
});