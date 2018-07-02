/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
const carFleet = function (target, position, speed) {
    if (position.length === 0) {
        return 0;
    }
    let p2i = new Map();
    for (let idx = 0; idx < position.length; ++idx) {
        p2i.set(position[idx], idx);
    }
    position.sort((a, b) => b - a);
    let fleets = 1, p0 = 0, p1 = 1;
    while (p1 < position.length) {
        let i0 = p2i.get(position[p0]);
        let i1 = p2i.get(position[p1]);
        if ((target - position[p0]) / speed[i0] >= (target - position[p1]) / speed[i1]) {
            ++p1;
        } else {
            ++fleets;
            p0 = p1++;
        }
    }
    return fleets;
};

module.exports = carFleet;