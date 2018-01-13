const func = require('../src/pow-x-n');
const assert = require('assert');
describe('pow-x-n', function () {
    describe('#myPow()', function () {
        it('should return 1024 when x is 2 and n is 10', function () {
            let ret = func(2, 10);
            assert.equal(ret, 1024);
        });
        it('should return 0 when x is 2 and n is -2147483648', function () {
            let ret = func(2, -2147483648);
            assert.equal(ret, 0);
        });
    });
});