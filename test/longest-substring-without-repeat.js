var func = require('../src/longest-substring-without-repeat');
var assert = require('assert');
describe('longest-substring-without-repeat', function () {
    describe('#lengthOfLongestSubstring()', function () {
        it('should return 3 when given "abcabcbb"', function () {
            var result = func('abcabcbb');
            assert.equal(3, result);
        });
        it('should return 1 when given "bbbbb"', function () {
            var result = func('bbbbb');
            assert.equal(1, result);
        });
        it('should return 3 when given "pwwkew"', function () {
            var result = func('pwwkew');
            assert.equal(3, result);
        });
        it('should return 2 when given "abba"', function () {
            var result = func('abba');
            assert.equal(2, result);
        });
    });
});