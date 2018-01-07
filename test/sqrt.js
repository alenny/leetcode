const func = require('../src/sqrt');
const assert = require('assert');
describe('sqrt', function () {
    describe('#mySqrt()', function () {
        it('should return 2 when given 4', function () {
            let ret = func(4);
            assert.equal(ret, 2);
        });
        it('should return 2 when given 8', function () {
            let ret = func(8);
            assert.equal(ret, 2);
        });
    });
});