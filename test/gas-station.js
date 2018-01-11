const func = require('../src/gas-station');
const assert = require('assert');
describe('gas-station', function () {
    describe('#canCompleteCircuit()', function () {
        it('should return -1 when given gas is [2,4] and cost is [3,4]', function () {
            const ret = func([2, 4], [3, 4]);
            assert.equal(ret, -1);
        });
        it('should return 0 when given gas is [2,0,1,2,3,4,0] and cost is [0,1,0,0,0,0,11]', function () {
            const ret = func([2, 0, 1, 2, 3, 4, 0], [0, 1, 0, 0, 0, 0, 11]);
            assert.equal(ret, 0);
        });
    });
});