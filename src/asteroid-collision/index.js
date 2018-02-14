/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
const asteroidCollision = function (asteroids) {
    if (asteroids.length < 2) {
        return asteroids;
    }
    let ret = [asteroids[0]];
    let idx = 1;
    while (idx < asteroids.length) {
        let a = asteroids[idx];
        if (a >= 0 || ret[ret.length - 1] < 0) {
            ret.push(a);
            ++idx;
            continue;
        }
        while (ret.length > 0 && ret[ret.length - 1] >= 0 && ret[ret.length - 1] < -a) {
            ret.pop();
        }
        if (ret.length === 0 || ret[ret.length - 1] < 0) {
            ret.push(a);
        } else if (ret.length > 0 && ret[ret.length - 1] === -a) {
            ret.pop();
        }
        ++idx;
    }
    return ret;
};

module.exports = asteroidCollision;