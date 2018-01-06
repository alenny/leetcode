const func = require('../src/skyline-problem');
const assert = require('assert');
describe('skyline-problem', function () {
    describe('#getSkyline()', function () {
        it('should return [[2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0]] when buildings is [ [2 9 10], [3 7 15], [5 12 12], [15 20 10], [19 24 8] ]', function () {
            const ret = func([[2, 9, 10], [3, 7, 15], [5, 12, 12], [15, 20, 10], [19, 24, 8]]);
            assert.deepEqual(ret, [[2, 10], [3, 15], [7, 12], [12, 0], [15, 10], [20, 8], [24, 0]]);
        });
    });
});