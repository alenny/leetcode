/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const complexNumberMultiply = function (a, b) {
    let c0 = parseComplex(a);
    let c1 = parseComplex(b);
    let r = c0[0] * c1[0] - c0[1] * c1[1];
    let v = c0[0] * c1[1] + c0[1] * c1[0];
    return r + '+' + v + 'i';
};

function parseComplex(s) {
    let regEx = /(\-?\d+)\+(\-?\d+)i/;
    let result = s.match(regEx);
    return [result[1], result[2]];
}

module.exports = complexNumberMultiply;