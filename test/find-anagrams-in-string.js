const func = require('../src/find-anagrams-in-string');
const assert = require('assert');
describe('find-anagrams-in-string', function () {
    describe('#findAnagrams()', function () {
        it('should return [] when s is \'\' and p is \'ab\'', function () {
            const result = func('', 'ab');
            assert.equal(0, result.length);
        });
        it('should return [0,6] when s is \'cbaebabacd\' and p is \'abc\'', function () {
            const result = func('cbaebabacd', 'abc');
            assert.equal(2, result.length);
            assert.equal(0, result[0]);
            assert.equal(6, result[1]);
        });
        it('should return [1] when s is \'baa\' and p is \'aa\'', function () {
            const result = func('baa', 'aa');
            assert.equal(1, result.length);
            assert.equal(1, result[0]);
        });
        it('should return [3,4,6] when s is \'abaacbabc\' and p is \'abc\'', function () {
            const result = func('abaacbabc', 'abc');
            assert.equal(3, result.length);
            assert.equal(3, result[0]);
            assert.equal(4, result[1]);
            assert.equal(6, result[2]);
        });
    });
});