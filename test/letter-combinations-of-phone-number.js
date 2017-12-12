const func = require('../src/letter-combinations-of-phone-number');
const assert = require('assert');
describe('letter-combinations-of-phone-number', function () {
    describe('#letterCombinations()', function () {
        it('should return ["ad", "bd", "cd", "ae", "be", "ce", "af", "bf", "cf"] when given "23"', function () {
            let ret = func('23');
            assert.deepEqual(ret, ["ad", "bd", "cd", "ae", "be", "ce", "af", "bf", "cf"]);
        });
    });
});