const func = require('../src/excel-sheet-column-title');
const assert = require('assert');
describe('excel-sheet-column-title', function () {
    describe('#convertToTitle()', function () {
        it('should return A when given 1', function () {
            let ret = func(1);
            assert.equal(ret, 'A');
        });
        it('should return Z when given 26', function () {
            let ret = func(26);
            assert.equal(ret, 'Z');
        });
        it('should return AB when given 28', function () {
            let ret = func(28);
            assert.equal(ret, "AB");
        });
    });
});