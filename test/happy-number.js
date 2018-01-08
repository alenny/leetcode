const func = require('../src/happy-number');
const assert = require('assert');
describe('happy-number', function () {
    describe('#isHappy()', function () {
        it('should return true when given 19', function () {
            const ret = func(19);
            assert.equal(ret, true);
        });
        it('should return false when given 2', function () {
            const ret = func(2);
            assert.equal(ret, false);
        });
    });
});