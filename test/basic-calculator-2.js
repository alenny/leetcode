const func = require('../src/basic-calculator-2');
const assert = require('assert');
describe('basic-calculator-2', function () {
    describe('#calculate()', function () {
        it('should return 7 when given 3 +2*2 ', function () {
            const ret = func('3 +2*2 ');
            assert.equal(ret, 7);
        });
        it('should return 5 when given 3+5 / 2', function () {
            const ret = func('3+5 / 2');
            assert.equal(ret, 5);
        });
        it('should return 0 when given 0*1', function () {
            const ret = func('0*1');
            assert.equal(ret, 0);
        });
        it('should return 0 when given 1/2', function () {
            const ret = func('1/2');
            assert.equal(ret, 0);
        });
    });
});