/**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
const rotateString = function (A, B) {
    return (A + A).indexOf(B) >= 0;
};

module.exports = rotateString;