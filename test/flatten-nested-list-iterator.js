const NestedIterator = require('../src/flatten-nested-list-iterator');
const NestedInteger = require('../src/_utils/nested-integer');
const assert = require('assert');
describe('flatten-nested-list-iterator', function () {
    describe('#hasNext()/#next()', function () {
        it('should return [1,1,2,1,1] when given [[1,1],2,[1,1]]', function () {
            let iterator = new NestedIterator([new NestedInteger(undefined, [new NestedInteger(1), new NestedInteger(1)]), new NestedInteger(2), new NestedInteger(undefined, [new NestedInteger(1), new NestedInteger(1)])]);
            let ret = [];
            while (iterator.hasNext()) {
                ret.push(iterator.next());
            }
            assert.deepEqual(ret, [1, 1, 2, 1, 1]);
        });
        it('should return [] when given [[]]', function () {
            let iterator = new NestedIterator([new NestedInteger(undefined, [])]);
            assert.equal(iterator.hasNext(), false);
        });
        it('should return [3,4] when given [[],3,[],4]', function () {
            let iterator = new NestedIterator([new NestedInteger(undefined, []), new NestedInteger(3), new NestedInteger(undefined, []), new NestedInteger(4)]);
            let ret = [];
            while (iterator.hasNext()) {
                ret.push(iterator.next());
            }
            assert.deepEqual(ret, [3, 4]);
        });
    });
});