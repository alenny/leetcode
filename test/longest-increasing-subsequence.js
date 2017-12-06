const func = require('../src/longest-increasing-subsequence');
const assert = require('assert');
describe('longest-increasing-subsequence', function () {
    describe('#lengthOfLIS()', function () {
        it('should return 4 when nums is [10, 9, 2, 5, 3, 7, 101, 18]', function () {
            let ret = func([10, 9, 2, 5, 3, 7, 101, 18]);
            assert.equal(ret, 4);
        });
    });
});