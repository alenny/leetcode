const func = require('../src/word-break-2');
const assert = require('assert');
describe('word-break-2', function () {
    describe('#wordBreak()', function () {
        it('should return ["cat sand dog","cats and dog"] when s is "catsanddog" and wordDict is ["cat", "cats", "and", "sand", "dog"]', function () {
            let ret = func('catsanddog', ["cat", "cats", "and", "sand", "dog"]);
            assert.deepEqual(ret, ["cat sand dog", "cats and dog"]);
        });
        it('should return ?? when s is "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa" and wordDict is ["a","aa","aaa","aaaa","aaaaa","aaaaaa","aaaaaaa","aaaaaaaa","aaaaaaaaa","aaaaaaaaaa"]', function () {
            let ret = func("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", ["a", "aa", "aaa", "aaaa", "aaaaa", "aaaaaa", "aaaaaaa", "aaaaaaaa", "aaaaaaaaa", "aaaaaaaaaa"]);
            assert.deepEqual(ret, []);
        });
    });
});