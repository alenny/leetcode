const func = require('../src/counting-bits');
const assert = require('assert');
describe('counting-bits', function () {
    describe('#countBits()', function () {
        it('should return [0,1,1,2,1,2] when given 5', function () {
            let ret = func(5);
            assert.equal(ret.length, 6);
            assert.equal(ret[0], 0);
            assert.equal(ret[1], 1);
            assert.equal(ret[2], 1);
            assert.equal(ret[3], 2);
            assert.equal(ret[4], 1);
            assert.equal(ret[5], 2);
        });
    });
});