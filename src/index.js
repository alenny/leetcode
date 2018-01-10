/* this file is only used for debug purpose */
const NestedIterator = require('../src/flatten-nested-list-iterator');
const NestedInteger = require('../src/_utils/nested-integer');
let iterator = new NestedIterator([new NestedInteger(undefined, [new NestedInteger(1), new NestedInteger(1)]), new NestedInteger(2), new NestedInteger(undefined, [new NestedInteger(1), new NestedInteger(1)])]);
let ret = [];
while (iterator.hasNext()) {
    ret.push(iterator.next());
}
