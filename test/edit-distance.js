const func = require('../src/edit-distance');
const assert = require('assert');
describe('edit-distance', function () {
    describe('#minDistance()', function () {
        it("should return 5 when word1 is abcde and word2 is fghij", function () {
            let ret = func('abcde', 'fghij');
            assert.deepEqual(ret, 5);
        });
        it("should return 3 when word1 is fabhie and word2 is abcde", function () {
            let ret = func('fabhie', 'abcde');
            assert.deepEqual(ret, 3);
        });
    });
});