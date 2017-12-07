const func = require('../src/perfect-squares');
const assert = require('assert');
describe('perfect-squares', function () {
    describe('#numSquares()', function () {
        it('should return 3 when n is 12', function () {
            let ret = func(12);
            assert.equal(ret, 3);
        });
        it('should return 2 when n is 13', function () {
            let ret = func(13);
            assert.equal(ret, 2);
        });
    });
});