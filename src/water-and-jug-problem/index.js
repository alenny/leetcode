/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */
const canMeasureWaterForce = function (x, y, z) {
    if (x > y) {
        [x, y] = [y, x];
    }
    if (x === 0) {
        return z === y || z === x;
    }
    let resultSet = new Set([0, x, y]);
    let round = [x, y];
    while (round.length > 0) {
        let nextRound = [];
        for (let t of round) {
            let r = (x + t) % y;
            if (!resultSet.has(r)) {
                resultSet.add(r);
                nextRound.push(r);
            }
            r = (y + t) % x;
            if (!resultSet.has(r)) {
                resultSet.add(r);
                nextRound.push(r);
            }
        }
        round = nextRound;
    }
    return resultSet.has(z) || resultSet.has(z - x) || z - y <= x && resultSet.has(z - y);
};

const canMeasureWater = function (x, y, z) {
    // Use GCD theory (Greatest Common Divisor)
    // https://leetcode.com/problems/water-and-jug-problem/discuss/83715/Math-solution-Java-solution
    if (z > x + y) {
        return false;
    }
    if (x === z || y === z || z === x + y) {
        return true;
    }
    return z % GCD(x, y) === 0;
};

function GCD(x, y) {
    while (y !== 0) {
        [x, y] = [y, x % y];
    }
    return x;
}

module.exports = canMeasureWater;