const func = require('../src/container-with-most-water');
const assert = require('assert');
describe('container-with-most-water', function () {
    describe('#maxArea()', function () {
        it('should return 1 when heights is [1,1]', function () {
            let ret = func([1, 1]);
            assert.equal(ret, 1);
        });
    });
});