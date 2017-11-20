const func = require('../src/rotate-image');
const assert = require('assert');
describe('rotate-image', function () {
    describe('#rotate()', function () {
        it('should return [[7,4,1],[8,5,2],[9,6,3]] when given [[1,2,3],[4,5,6],[7,8,9]]', function () {
            let ret = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
            func(ret);
            assert.equal(ret.length, 3);
            assert.equal(ret[0][0], 7);
            assert.equal(ret[0][1], 4);
            assert.equal(ret[0][2], 1);
            assert.equal(ret[1][0], 8);
            assert.equal(ret[1][1], 5);
            assert.equal(ret[1][2], 2);
            assert.equal(ret[2][0], 9);
            assert.equal(ret[2][1], 6);
            assert.equal(ret[2][2], 3);
        });
    });
});