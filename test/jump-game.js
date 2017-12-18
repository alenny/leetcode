const func = require('../src/jump-game');
const assert = require('assert');
describe('jump-game', function () {
    describe('#canJump()', function () {
        it('should return true when numbers are [2,3,1,1,4]', function () {
            let ret = func([2, 3, 1, 1, 4]);
            assert.equal(ret, true);
        });
        it('should return false when numbers are [3,2,1,0,4]', function () {
            let ret = func([3, 2, 1, 0, 4]);
            assert.equal(ret, false);
        });
    });
});