var twoSum = require('../src/two-sum');
var assert = require('assert');
describe('two-sum', function () {
    describe('#twoSum()', function () {
        it('should return [0, 1] when nums is [2, 7, 11, 15] and target is 9', function () {
            var result = twoSum([2, 7, 11, 15], 9);
            assert.deepEqual([0, 1], result);
        });
    });
});