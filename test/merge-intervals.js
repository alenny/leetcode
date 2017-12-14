const func = require('../src/merge-intervals');
const Interval = require('../src/_utils/interval');
const assert = require('assert');
describe('merge-intervals', function () {
    describe('#merge()', function () {
        it('should return [1,6],[8,10],[15,18] when given [1,3],[2,6],[8,10],[15,18]', function () {
            let input = [new Interval(1, 3), new Interval(2, 6), new Interval(8, 10), new Interval(15, 18)];
            let ret = func(input);
            assert.equal(ret.length, 3);
        });
    });
});