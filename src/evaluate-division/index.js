/**
 * @param {string[][]} equations
 * @param {number[]} values
 * @param {string[][]} queries
 * @return {number[]}
 */
const calcEquation = function (equations, values, queries) {
    let map = new Map();
    for (let i = 0; i < equations.length; ++i) {
        enterToMap(map, equations[i][0], equations[i][1], values[i]);
    }
    let ret = [];
    queries.forEach(query => ret.push(answer(map, query[0], query[1], new Set())));
    return ret;
};

function enterToMap(map, v0, v1, k) {
    // Enter both v0/v1 and v1/v0
    let loop = v0 !== v1 ? 2 : 1;
    for (let i = 0; i < loop; ++i) {
        let subMap = map.get(v0);
        if (!subMap) {
            subMap = new Map();
            map.set(v0, subMap);
        }
        subMap.set(v1, k);
        [v0, v1] = [v1, v0];
        k = 1 / k;
    }
}

function answer(map, v0, v1, set) {
    if (!map.has(v0) || !map.has(v1)) {
        return -1;
    }
    if (v0 === v1) {
        return 1;
    }
    let subMap = map.get(v0);
    if (subMap.has(v1)) {
        return subMap.get(v1);
    }
    for (let pair of subMap) {
        if (set.has(pair[0])) {
            continue;
        }
        set.add(pair[0]);
        let x = answer(map, pair[0], v1, set);
        set.delete(pair[0]);
        if (x !== -1) {
            return pair[1] * x;
        }
    }
    return -1;
}

module.exports = calcEquation;