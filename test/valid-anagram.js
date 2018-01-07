const func = require('../src/valid-anagram');
const assert = require('assert');
describe('valid-anagram', function () {
    describe('#isAnagram()', function () {
        it('should return true when s is anagram and t is nagaram', function () {
            let ret = func('anagram', 'nagaram');
            assert.equal(ret, true);
        });
        it('should return false when s is rat and t is car', function () {
            let ret = func('rat', 'car');
            assert.equal(ret, false);
        });
    });
});