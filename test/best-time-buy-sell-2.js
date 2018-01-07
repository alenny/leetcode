const func = require('../src/best-time-buy-sell-2');
const assert = require('assert');
describe('best-time-buy-sell-2', function () {
    describe('#maxProfit()', function () {
        it('should return 4 when given [1,4,2,3]', function () {
            let ret = func([1, 4, 2, 3]);
            assert.equal(ret, 4);
        });
    });
});