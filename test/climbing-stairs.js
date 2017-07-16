const func = require('../src/climbing-stairs');
const assert = require('assert');
describe('climbing-stairs', function () {
    describe('#climbStairs()', function () {
        it('should return 1 when n is 1', function () {
            const result = func(1);
            assert.equal(1, result);
        });
        it('should return 3 when n is 3', function () {
            const result = func(3);
            assert.equal(3, result);
        });
    });
});