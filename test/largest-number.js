const func = require('../src/largest-number');
const assert = require('assert');
describe('largest-number', function () {
    describe('#largestNumber()', function () {
        it('should return 9534330 when given [3, 30, 34, 5, 9]', function () {
            let ret = func([3, 30, 34, 5, 9]);
            assert.equal(ret, '9534330');
        });
    });
});