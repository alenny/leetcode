const func = require('../src/top-k-frequent-elements');
const assert = require('assert');
describe('top-k-frequent-elements', function () {
    describe('#topKFrequent()', function () {
        it('should return [1,2] when given [1,1,1,2,2,3] and k=2', function () {
            var result = func([1, 1, 1, 2, 2, 3], 2);
            assert.equal(result.length, 2);
            assert.equal(result[0], 1);
            assert.equal(result[1], 2);
        });
    });
});