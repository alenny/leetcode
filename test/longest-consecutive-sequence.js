const func = require('../src/longest-consecutive-sequence');
const assert = require('assert');
describe('longest-consecutive-sequence', function () {
    describe('#longestConsecutive()', function () {
        it("should return 4 when numbers are [100, 4, 200, 1, 3, 2]", function () {
            let ret = func([100, 4, 200, 1, 3, 2]);
            assert.equal(ret, 4);
        });
    });
});