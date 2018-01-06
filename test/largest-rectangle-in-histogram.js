const func = require('../src/largest-rectangle-in-histogram');
const assert = require('assert');
describe('largest-rectangle-in-histogram', function () {
    describe('#largestRectangleArea()', function () {
        it('should return 10 when heights is [2,1,5,6,2,3]', function () {
            const ret = func([2, 1, 5, 6, 2, 3]);
            assert.equal(ret, 10);
        });
    });
});