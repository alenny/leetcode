const func = require('../src/best-time-buy-sell');
const assert = require('assert');
describe('best-time-buy-sell', function () {
    describe('#maxProfit()', function () {
        it('should return 3 when prices are [1, 2, 3, 0, 2]', function () {
            let ret = func([1, 2, 3, 0, 2]);
            assert.equal(ret, 3);
        });
    });
});