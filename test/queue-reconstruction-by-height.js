const func = require('../src/queue-reconstruction-by-height');
const assert = require('assert');
describe('queue-reconstruction-by-height', function () {
    describe('#reconstructQueue()', function () {
        it('should return [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]] when given [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]', function () {
            let people = [[7, 0], [4, 4], [7, 1], [5, 0], [6, 1], [5, 2]];
            let ret = func(people);
            assert.equal(ret.length, 6)
            assert.equal(ret[0][0], 5);
            assert.equal(ret[0][1], 0);
            assert.equal(ret[1][0], 7);
            assert.equal(ret[1][1], 0);
            assert.equal(ret[2][0], 5);
            assert.equal(ret[2][1], 2);
            assert.equal(ret[3][0], 6);
            assert.equal(ret[3][1], 1);
            assert.equal(ret[4][0], 4);
            assert.equal(ret[4][1], 4);
            assert.equal(ret[5][0], 7);
            assert.equal(ret[5][1], 1);
        });
    });
});