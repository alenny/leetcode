const func = require('../src/search-2d-matrix');
const assert = require('assert');
describe('search-2d-matrix', function () {
    describe('#searchMatrix()', function () {
        it('should return true when matrix is [[1,3,5,7],[10,11,16,20],[23,30,34,50]] and target is 3', function () {
            let ret = func([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 3);
            assert.equal(ret, true);
        });
        it('should return true when matrix is [[1,3,5,7],[10,11,16,20],[23,30,34,50]] and target is 7', function () {
            let ret = func([[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 50]], 7);
            assert.equal(ret, true);
        });
    });
});