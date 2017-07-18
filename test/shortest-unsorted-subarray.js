const func = require('../src/shortest-unsorted-subarray');
const assert = require('assert');
describe('shortest-unsorted-subarray', function () {
    describe('#findUnsortedSubarray()', function () {
        it('should return 5 when nums is [2, 6, 4, 8, 10, 9, 15]', function () {
            const result = func([2, 6, 4, 8, 10, 9, 15]);
            assert.equal(5, result);
        });
    });
});