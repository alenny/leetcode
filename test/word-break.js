const func = require('../src/word-break');
const assert = require('assert');
describe('word-break', function () {
    describe('#wordBreak()', function () {
        it('should return true when s is "leetcode" and wordDict is ["leet", "code"]', function () {
            let ret = func('leetcode', ['leet', 'code']);
            assert.equal(ret, true);
        });
        it('should return true when s is "bb" and wordDict is ["a", "b", "bbb", "bbbb"]', function () {
            let ret = func('bb', ["a", "b", "bbb", "bbbb"]);
            assert.equal(ret, true);
        });
    });
});