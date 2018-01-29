/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
const flipLights = function (n, m) {
    // Note: 
    // #1 only odd clicks to a single button counts
    // #2 if m is odd, consider 1 odd clicks or 3 odd clicks to a single button
    // #3 if m is even, consider 2 odd clicks or 4 odd clicks to a single button, 
    //    then plus 1 meaning only even clicks to to go back to the initial status.
    // #4 only need to consider n=1 to 6. pattern is repeated from 7.
    // #5 only need to consider n=1 to 4 since 5 has the same status as 3 and 6 has the same status as 2.
    if (n === 0 || m === 0) {
        return 1;
    }
    // n > 0 && m > 0
    if (n === 1) {
        return 2;
    }
    if (m === 1) {
        return n === 2 ? 3 : 4;
    }
    // m > 1
    if (n === 2) {
        return 4;
    }
    // n > 2
    return m === 2 ? 7 : 8;
};

module.exports = flipLights;