const func = require('../src/missing-number');
const assert = require('assert');
describe('missing-number', function () {
    describe('#missingNumber()', function () {
        it('should return 2 when given [3,0,1]', function () {
            const ret = func([3, 0, 1]);
            assert.equal(ret, 2);
        });
    });
});