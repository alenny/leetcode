const func = require('../src/course-schedule-2');
const assert = require('assert');
describe('course-schedule-2', function () {
    describe('#findOrder()', function () {
        it('should return [1,0] when numCourses is 2 and prerequisites is [[0,1]]', function () {
            let ret = func(2, [[0, 1]]);
            assert.deepEqual(ret, [1, 0]);
        });
    });
});