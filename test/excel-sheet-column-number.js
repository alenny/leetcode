const func = require('../src/excel-sheet-column-number');
const assert = require('assert');
describe('excel-sheet-column-number', function () {
    describe('#titleToNumber()', function () {
        it('should return 1 when given A', function () {
            let ret = func('A');
            assert.equal(ret, 1);
        });
        it('should return 26 when given Z', function () {
            let ret = func('Z');
            assert.equal(ret, 26);
        });
        it('should return 28 when given AB', function () {
            let ret = func('AB');
            assert.equal(ret, 28);
        });
    });
});