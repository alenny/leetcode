const func = require('../src/island-perimeter');
const assert = require('assert');
describe('island-perimeter', function () {
    describe('#islandPerimeter()', function () {
        it('should return 16 when grid is [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]', function () {
            const result = func([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]);
            assert.equal(16, result);
        });
    });
});