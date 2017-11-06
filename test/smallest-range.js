const func = require('../src/smallest-range');
const assert = require('assert');
describe('smallest-range', function () {
    describe('#smallestRange()', function () {
        it('should return [20,24] when inputs are [[4,10,15,24,26], [0,9,12,20], [5,18,22,30]]', function () {
            const nums = [[4, 10, 15, 24, 26], [0, 9, 12, 20], [5, 18, 22, 30]];
            const result = func(nums);
            assert.equal(result.length, 2);
            assert.equal(result[0], 20);
            assert.equal(result[1], 24);
        });
    });
});