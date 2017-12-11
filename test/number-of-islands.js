const func = require('../src/number-of-islands');
const assert = require('assert');
describe('number-of-islands', function () {
    describe('#numIslands()', function () {
        it('should return 1 when given 11110,11010,11000,00000', function () {
            let ret = func([['1', '1', '1', '1', '0'], ['1', '1', '0', '1', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '0', '0', '0']]);
            assert.equal(ret, 1);
        });
        it('should return 3 when given 11000,11000,00100,00011', function () {
            let ret = func([['1', '1', '0', '0', '0'], ['1', '1', '0', '0', '0'], ['0', '0', '1', '0', '0'], ['0', '0', '0', '1', '1']]);
            assert.equal(ret, 3);
        });
    });
});