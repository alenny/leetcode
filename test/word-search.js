const func = require('../src/word-search');
const assert = require('assert');
describe('word-search', function () {
    describe('#exist()', function () {
        it("should return true when board is [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']] and word is 'ABCCED'", function () {
            let ret = func([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED');
            assert.equal(ret, true);
        });
        it("should return false when board is [['A','B','C','E'],['S','F','C','S'],['A','D','E','E']] and word is 'ABCB'", function () {
            let ret = func([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCB');
            assert.equal(ret, false);
        });
        it('should return true when board is [["C","A","A"],["A","A","A"],["B","C","D"]] and word is "AAB"', function () {
            let ret = func([["C", "A", "A"], ["A", "A", "A"], ["B", "C", "D"]], 'AAB');
            assert.equal(ret, true);
        });
    });
});