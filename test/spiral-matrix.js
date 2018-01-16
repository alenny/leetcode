const func = require('../src/spiral-matrix');
const assert = require('assert');
describe('spiral-matrix', function () {
    describe('#spiralOrder()', function () {
        it('should return [1,2,3,6,9,8,7,4,5] when matrix is [[ 1, 2, 3 ],[ 4, 5, 6 ],[ 7, 8, 9 ]]', function () {
            let ret = func([[1, 2, 3], [4, 5, 6], [7, 8, 9]]);
            assert.deepEqual(ret, [1, 2, 3, 6, 9, 8, 7, 4, 5]);
        });
        it('should return [7,9,6] when matrix is [[7],[9],[6]]', function () {
            let ret = func([[7], [9], [6]]);
            assert.deepEqual(ret, [7, 9, 6]);
        });
        it('should return [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13] when matrix is [[1,2,3,4,5],[6,7,8,9,10],[11,12,13,14,15],[16,17,18,19,20],[21,22,23,24,25]]', function () {
            let ret = func([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13, 14, 15], [16, 17, 18, 19, 20], [21, 22, 23, 24, 25]]);
            assert.deepEqual(ret, [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]);
        });
    });
});