const func = require('../src/unique-binary-search-trees');
const assert = require('assert');
describe('unique-binary-search-trees', function () {
    describe('#numTrees()', function () {
        it('should return 5 when n is 3', function () {
            let ret = func(3);
            assert.equal(ret, 5);
        });
    });
});