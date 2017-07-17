const func = require('../src/reverse-words-3');
const assert = require('assert');
describe('reverse-words-3', function () {
    describe('#reverseWords()', function () {
        it('should return "s\'teL ekat edoCteeL tsetnoc" when s is "Let\'s take LeetCode contest"', function () {
            const result = func('Let\'s take LeetCode contest');
            assert.equal('s\'teL ekat edoCteeL tsetnoc', result);
        });
    });
});