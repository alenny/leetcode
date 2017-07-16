const func = require('../src/hamming-distance');
const assert = require('assert');
describe('hamming-distance', function () {
    describe('#hammingDistance()', function () {
        it('should return 0 when x is 1 and y is 1', function () {
            const result = func(1, 1);
            assert.equal(0, result);
        });
        it('should return 2 when x is 1 and y is 4', function () {
            const result = func(1, 4);
            assert.equal(2, result);
        });
    });
});