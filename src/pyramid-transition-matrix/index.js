/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
const pyramidTransition = function (bottom, allowed) {
    let map = new Map();
    for (let allow of allowed) {
        let subMap = map.get(allow[0]);
        if (!subMap) {
            subMap = new Map();
            map.set(allow[0], subMap);
        }
        let col = subMap.get(allow[1]);
        if (!col) {
            subMap.set(allow[1], [allow[2]]);
        } else {
            col.push(allow[2]);
        }
    }
    return canBuild(bottom.split(''), map, 0, []);
};

function canBuild(level, map, idx, upLevel) {
    if (level.length === 1) {
        return true;
    }
    if (idx > level.length - 2) {
        return canBuild(upLevel, map, 0, []);
    }
    if (!map.has(level[idx]) || !map.get(level[idx]).has(level[idx + 1])) {
        return false;
    }
    let col = map.get(level[idx]).get(level[idx + 1]);
    ++idx;
    for (let n of col) {
        upLevel.push(n);
        if (canBuild(level, map, idx, upLevel)) {
            return true;
        }
        upLevel.pop();
    }
    return false;
}

module.exports = pyramidTransition;