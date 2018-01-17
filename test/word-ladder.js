const func = require('../src/word-ladder');
const assert = require('assert');
describe('word-ladder', function () {
    describe('#ladderLength()', function () {
        it('should return 5 when beginWord is hit, endWord is cog and dictionary is ["hot","dot","dog","lot","log","cog"]', function () {
            let ret = func('hit', 'cog', ["hot", "dot", "dog", "lot", "log", "cog"]);
            assert.equal(ret, 5);
        });
    });
});