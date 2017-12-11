const func = require('../src/group-anagrams');
const assert = require('assert');
describe('group-anagrams', function () {
    describe('#groupAnagrams()', function () {
        it('should return [["ate","eat","tea"],["nat","tan"],["bat"]] when strs is ["eat", "tea", "tan", "ate", "nat", "bat"]', function () {
            let ret = func(["eat", "tea", "tan", "ate", "nat", "bat"]);
            assert.deepEqual(ret, [["eat", "tea", "ate"], ["tan", "nat"], ["bat"]]);
        });
    });
});