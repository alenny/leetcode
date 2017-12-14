const func = require('../src/search-in-rotated-sorted-array');
const assert = require('assert');
describe('search-in-rotated-sorted-array', function () {
    describe('#search()', function () {
        it('should return 3 when numbers is [9,10,11,12,0,1,2,3,4,5,6,7,8] and target is 12', function () {
            let ret = func([9, 10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8], 12);
            assert.equal(ret, 3);
        });
        it('should return -1 when numbers is [9,10,11,12,0,1,2,3,4,5,6,7,8] and target is 13', function () {
            let ret = func([9, 10, 11, 12, 0, 1, 2, 3, 4, 5, 6, 7, 8], 13);
            assert.equal(ret, -1);
        });
    });
});