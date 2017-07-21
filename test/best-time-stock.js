const func = require('../src/best-time-stock');
const assert = require('assert');
describe('best-time-stock', function () {
    describe('#maxProfit()', function () {
        it('should return 5 when prices is [7, 1, 5, 3, 6, 4]', function () {
            const result = func([7, 1, 5, 3, 6, 4]);
            assert.equal(5, result);
        });
        it('should return 0 when prices is [7, 6, 4, 3, 1]', function () {
            const result = func([7, 6, 4, 3, 1]);
            assert.equal(0, result);
        });
    });
});