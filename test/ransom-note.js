var canConstruct = require('../src/ransom-note');
var assert = require('assert');
describe('ransom-note', function () {
    describe('#canConstruct()', function () {
        it('should return false when ransomNote is a and magazine is b', function () {
            var result = canConstruct('a', 'b');
            assert.equal(false, result);
        });
        it('should return false when ransomNote is aa and magazine is ab', function () {
            var result = canConstruct('aa', 'ab');
            assert.equal(false, result);
        });
        it('should return false when ransomNote is aa and magazine is aab', function () {
            var result = canConstruct('aa', 'aab');
            assert.equal(true, result);
        });
    });
});