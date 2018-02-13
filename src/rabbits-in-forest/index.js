/**
 * @param {number[]} answers
 * @return {number}
 */
const numRabbits = function (answers) {
    let map = new Map();
    for (let answer of answers) {
        let count = map.get(answer);
        map.set(answer, count ? count + 1 : 1);
    }
    let rabbits = 0;
    for (let pair of map) {
        rabbits += Math.ceil(pair[1] / (pair[0] + 1)) * (pair[0] + 1);
    }
    return rabbits;
};

module.exports = numRabbits;