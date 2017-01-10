var func = require('../src/longest-absolute-file-path');
var assert = require('assert');
describe('longest-absolute-file-path', function () {
    describe('#lengthLongestPath()', function () {
        it('should return 0 when given ""', function () {
            var result = func('');
            assert.equal(0, result);
        });
        it('should return 0 when given "dir\\n\\tsubdir1\\n\\t\\tfile1.ext\\n\\t\\tsubsubdir1\\n\\tsubdir2\\n\\t\\tsubsubdir2\\n\\t\\t\\tfile2.ext"', function () {
            var result = func('dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext');
            assert.equal(32, result);
        });
        it('should return 20 when given "dir\\n\\t        file.txt\\n\\tfile2.txt"', function () {
            var result = func('dir\n\t        file.txt\n\tfile2.txt');
            assert.equal(20, result);
        });
    });
});