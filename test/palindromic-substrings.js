const func = require('../src/palindromic-substrings');
const assert = require('assert');
describe('palindromic-substrings', function () {
    describe('#countSubstrings()', function () {
        it('should return 1 when given an empty string', function () {
            const result = func('');
            assert.equal(result, 1);
        });
        it('should return 3 when given abc', function () {
            const result = func('abc');
            assert.equal(result, 3);
        });
        it('should return 10 when given aaaa', function () {
            const result = func('aaaa');
            assert.equal(result, 10);
        });
    });
});