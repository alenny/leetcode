const func = require('../src/majority-element');
const assert = require('assert');
describe('majority-element', function () {
    describe('#majorityElement()', function () {
        it('should return 1 when nums is [1]', function () {
            const result = func([1]);
            assert.equal(1, result);
        });
        it('should return 1 when nums is [1,3,1,2,1]', function () {
            const result = func([1, 3, 1, 2, 1]);
            assert.equal(1, result);
        });
    });
});