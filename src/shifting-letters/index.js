/**
 * @param {string} S
 * @param {number[]} shifts
 * @return {string}
 */
const shiftingLetters = function (S, shifts) {
    const A_CODE = 'a'.charCodeAt(0);
    let result = [], shift = 0;
    for (let si = shifts.length - 1; si >= 0; --si) {
        shift += shifts[si];
        let ch = String.fromCharCode((S.charCodeAt(si) - A_CODE + shift) % 26 + A_CODE);
        result.push(ch);
    }
    result.reverse();
    return result.join('');
};

module.exports = shiftingLetters;