const func = require('../src/unique-paths');
const assert = require('assert');
describe('unique-paths', function () {
    describe('#uniquePaths()', function () {
        it('should return 10 when m=3 and n=4', function () {
            let ret = func(3, 4);
            assert.equal(ret, 10);
        });
    });
});