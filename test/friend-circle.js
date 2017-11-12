const func = require('../src/friend-circle');
const assert = require('assert');
describe('friend-circle', function () {
    describe('#findCircleNum()', function () {
        it('should return 2 when given [[1,1,0],[1,1,0],[0,0,1]]', function () {
            var result = func([[1, 1, 0], [1, 1, 0], [0, 0, 1]]);
            assert.equal(result, 2);
        });
        it('should return 1 when given [[1,1,0],[1,1,1],[0,1,1]]', function () {
            var result = func([[1, 1, 0], [1, 1, 1], [0, 1, 1]]);
            assert.equal(result, 1);
        });
        it('should return 1 when given [[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]', function () {
            var result = func([[1, 0, 0, 1], [0, 1, 1, 0], [0, 1, 1, 1], [1, 0, 1, 1]]);
            assert.equal(result, 1);
        });
    });
});