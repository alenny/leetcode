const func = require('../src/divide-two-integers');
const assert = require('assert');
describe('divide-two-integers', function () {
    describe('#divide()', function () {
        it('should return 2 when dividend is 5 and divisor is 2', function () {
            let ret = func(5, 2);
            assert.equal(ret, 2);
        });
        it('should return 1073741823 when dividend is 2147483647 and divisor is 2', function () {
            let ret = func(2147483647, 2);
            assert.equal(ret, 1073741823);
        });
        it('should return -1073741824 when dividend is -2147483648 and divisor is 2', function () {
            let ret = func(-2147483648, 2);
            assert.equal(ret, -1073741824);
        });
    });
});