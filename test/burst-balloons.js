const func = require('../src/burst-balloons');
const assert = require('assert');
describe('burst-balloons', function () {
    describe('#maxCoins()', function () {
        it("should return 167 when numbers are [3,1,5,8]", function () {
            let ret = func([3, 1, 5, 8]);
            assert.equal(ret, 167);
        });
    });
});