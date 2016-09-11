/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    var result = 0;
    var carry = 0;
    for (var i = 0; i < 32; ++i) {
        var abit = a & 1;
        var bbit = b & 1;
        if (abit ^ bbit ^ carry) {
            result |= 1 << i;
        }
        carry = (abit & bbit) | ((abit ^ bbit) & carry);
        a >>= 1;
        b >>= 1;
    }  
    return result;
};

module.exports = getSum;