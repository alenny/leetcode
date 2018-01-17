/**
 * @param {number} num
 * @return {number}
 */
const addDigits = function (num) {
    // digit root problem
    // https://en.wikipedia.org/wiki/Digital_root#Congruence_formula
    if (num === 0) {
        return 0;
    }
    let mod = num % 9;
    return mod === 0 ? 9 : mod;
};

module.exports = addDigits;