const func = require('../src/longest-substring-k-repeating');
const assert = require('assert');
describe('longest-substring-k-repeating', function () {
    describe('#longestSubstring()', function () {
        it('should return 3 when s is aaabb and k is 3', function () {
            const ret = func('aaabb', 3);
            assert.equal(ret, 3);
        });
        it('should return 5 when s is ababbc and k is 2', function () {
            const ret = func('ababbc', 2);
            assert.equal(ret, 5);
        });
        it('should return 0 when s is dcbddccbacbcacb and k is 3', function () {
            const ret = func('dcbddccbacbcacb', 3);
            assert.equal(ret, 0);
        });
    });
    3
});