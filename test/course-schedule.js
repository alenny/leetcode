const func = require('../src/course-schedule');
const assert = require('assert');
describe('course-schedule', function () {
    describe('#canFinish()', function () {
        it('should return true when given 2 and [[1,0]]', function () {
            let ret = func(2, [[1, 0]]);
            assert.equal(ret, true);
        });
        it('should return false when given 2 and [[1,0],[0,1]]', function () {
            let ret = func(2, [[1, 0], [0, 1]]);
            assert.equal(ret, false);
        });
    });
});