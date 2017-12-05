const func = require('../src/search-2d-matrix-2');
const assert = require('assert');
describe('search-2d-matrix-2', function () {
    describe('#searchMatrix()', function () {
        it('should return true when matrix is [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]] and target is 5', function () {
            let ret = func([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 5);
            assert.equal(ret, true);
        });
        it('should return false when matrix is [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]] and target is 20', function () {
            let ret = func([[1, 4, 7, 11, 15], [2, 5, 8, 12, 19], [3, 6, 9, 16, 22], [10, 13, 14, 17, 24], [18, 21, 23, 26, 30]], 20);
            assert.equal(ret, false);
        });
    });
});