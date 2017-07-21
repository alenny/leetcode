const func = require('../src/longest-palindromic-substring');
const assert = require('assert');
describe('longest-palindromic-substring', function () {
    describe('#longestPalindrome()', function () {
        it('should return bab when s is babad', function () {
            const result = func('babad');
            assert.equal('bab', result);
        });
        it('should return ccc when s is ccc', function () {
            const result = func('ccc');
            assert.equal('ccc', result);
        });
    });
});