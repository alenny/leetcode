const func = require('../src/task-scheduler');
const assert = require('assert');
describe('task-scheduler', function () {
    describe('#leastInterval()', function () {
        it('should return 8 subsets when tasks are ["A","A","A","B","B","B"] and n=2', function () {
            let ret = func(['A', 'A', 'A', 'B', 'B', 'B'], 2);
            assert.equal(ret, 8);
        });
        it('should return 16 subsets when tasks are ["A","A","A","A","A","A","B","C","D","E","F","G"] and n=2', function () {
            let ret = func(['A', 'A', 'A', 'A', 'A', 'A', 'B', 'C', 'D', 'E', 'F', 'G'], 2);
            assert.equal(ret, 16);
        });
        it('should return 8 subsets when tasks are ["A","A","A","B","B","B"] and n=0', function () {
            let ret = func(['A', 'A', 'A', 'B', 'B', 'B'], 0);
            assert.equal(ret, 6);
        });
    });
});