const func = require('../src/search-for-a-range');
const assert = require('assert');
describe('search-for-a-range', function () {
    describe('#searchRange()', function () {
        it('should return [3,4] when numbers is [5,7,7,8,8,10] and target is 8', function () {
            let ret = func([5, 7, 7, 8, 8, 10], 8);
            assert.deepEqual(ret, [3, 4]);
        });
        it('should return [-1,-1] when numbers is [5,7,7,8,8,10] and target is 9', function () {
            let ret = func([5, 7, 7, 8, 8, 10], 9);
            assert.deepEqual(ret, [-1, -1]);
        });
    });
});