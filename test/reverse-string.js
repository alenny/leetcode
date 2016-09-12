var func = require('../src/reverse-string');
var assert = require('assert');
describe('reverse-string', function () {
    describe('#reverseString()', function () {
        it('should return olleh when given hello', function () {
            var result = func('hello');
            assert.equal('olleh', result);
        });
        it('should return a when given a', function () {
            var result = func('a');
            assert.equal('a', result);
        });
        it('should return "" when given ""', function () {
            var result = func('');
            assert.equal('', result);
        });
    });
});