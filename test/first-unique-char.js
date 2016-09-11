var firstUniqChar = require('../src/first-unique-char');
var assert = require('assert');
describe('first-unique-char', function () {
    describe('#firstUniqChar()', function () {
        it('should return 0 when s is leetcode', function () {
            var result = firstUniqChar('leetcode');
            assert.equal(0, result);
        });
        it('should return 2 when s is loveleetcode', function () {
            var result = firstUniqChar('loveleetcode');
            assert.equal(2, result);
        });
        it('should return -1 when s is loveevol', function () {
            var result = firstUniqChar('loveevol');
            assert.equal(-1, result);
        });
    });
});