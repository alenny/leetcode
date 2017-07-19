const func = require('../src/house-robber');
const assert = require('assert');
describe('house-robber', function () {
    describe('#rob()', function () {
        it('should return 4 when nums is [2,1,1,2]', function () {
            const result = func([2, 1, 1, 2]);
            assert.equal(4, result);
        });
    });
});