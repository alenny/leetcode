const Trie = require('../src/implement-trie');
const assert = require('assert');
describe('implement-trie', function () {
    describe('#insert()|search()|startsWith()', function () {
        it('should return correct when given a valid trie', function () {
            let trie = new Trie();
            trie.insert('abc');
            trie.insert('abcd');
            trie.insert('abce');
            trie.insert('af');
            trie.insert('ag');
            assert.equal(trie.search('abce'), true);
            assert.equal(trie.startsWith('ah'), false);
        });
    });
});