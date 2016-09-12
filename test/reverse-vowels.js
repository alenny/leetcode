var func = require('../src/reverse-vowels');
var assert = require('assert');
describe('reverse-vowels-of-a-string', function () {
    describe('#reverseVowels()', function () {
        it('should return holle when given hello', function () {
            var result = func('hello');
            assert.equal('holle', result);
        });
        it('should return leotcede when given leetcode', function () {
            var result = func('leetcode');
            assert.equal('leotcede', result);
        });
        it('should return " " when given " "', function () {
            var result = func(' ');
            assert.equal(' ', result);
        });
        it('should return a. when given a.', function () {
            var result = func('a.');
            assert.equal('a.', result);
        });
        it('should return Aa when given aA', function () {
            var result = func('aA');
            assert.equal('Aa', result);
        });
    });
});