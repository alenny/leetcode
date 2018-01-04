const func = require('../src/maximum-rectangle');
const assert = require('assert');
describe('maximum-rectangle', function () {
    describe('#maximalRectangle()', function () {
        it("should return 6 when matrix is [['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]", function () {
            let ret = func([['1', '0', '1', '0', '0'], ['1', '0', '1', '1', '1'], ['1', '1', '1', '1', '1'], ['1', '0', '0', '1', '0']]);
            assert.equal(ret, 6);
        });
    });
});