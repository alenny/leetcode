/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function (letters, target) {
    for (let ch of letters) {
        if (ch > target) {
            return ch;
        }
    }
    return letters[0];
};

module.exports = nextGreatestLetter;