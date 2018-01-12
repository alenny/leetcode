const func = require('../src/basic-calculator');
const assert = require('assert');
describe('basic-calculator', function () {
    describe('#calculate()', function () {
        it('should return 1 when given (1)', function () {
            const ret = func('(1)');
            assert.equal(ret, 1);
        });
    });
});