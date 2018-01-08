const func = require('../src/reverse-bits');
const assert = require('assert');
describe('reverse-bits', function () {
    describe('#reverse()', function () {
        it('should return 4294967295 when given 4294967295', function () {
            const ret = func(4294967295);
            assert.equal(ret, 4294967295);
        });
    });
});