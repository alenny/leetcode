const func = require('../src/roman-to-integer');
const assert = require('assert');
describe('roman-to-integer', function () {
    describe('#romanToInt()', function () {
        it('should return 17 when given XVII', function () {
            let ret = func('XVII');
            assert.equal(ret, 17);
        });
        it('should return 1996 when given "MCMXCVI"', function () {
            let ret = func("MCMXCVI");
            assert.equal(ret, 1996);
        });
    });
});