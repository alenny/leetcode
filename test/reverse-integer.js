const func = require('../src/reverse-integer');
const assert = require('assert');
describe('reverse-integer', function () {
    describe('#reverse()', function () {
        it('should return 86723 when given 32768', function () {
            const ret = func(32768);
            assert.equal(ret, 86723);
        });
        it('should return 0 when given 1563847412', function () {
            const ret = func(1563847412);
            assert.equal(ret, 0);
        });
    });
});