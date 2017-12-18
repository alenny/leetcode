const func = require('../src/maximal-square');
const assert = require('assert');
describe('maximal-square', function () {
    describe('#maximalSquare()', function () {
        it('should return 4 when matrix is [["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]', function () {
            let ret = func([["1", "0", "1", "0", "0"], ["1", "0", "1", "1", "1"], ["1", "1", "1", "1", "1"], ["1", "0", "0", "1", "0"]]);
            assert.equal(ret, 4);
        });
    });
});