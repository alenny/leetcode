/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
const robotSim = function (commands, obstacles) {
    const deltas = [[0, 1], [-1, 0], [0, -1], [1, 0]];
    let obMap = new Map();
    for (let ob of obstacles) {
        let ySet = obMap.get(ob[0]);
        if (!ySet) {
            ySet = new Set();
            obMap.set(ob[0], ySet);
        }
        ySet.add(ob[1]);
    }
    let x = 0, y = 0, di = 0, max = 0;
    for (let cmd of commands) {
        if (cmd === -2) {
            di = di === 3 ? 0 : di + 1;
            continue;
        }
        if (cmd === -1) {
            di = di === 0 ? 3 : di - 1;
            continue;
        }
        let next = go(x, y, deltas[di][0], deltas[di][1], cmd, obMap);
        x = next[0];
        y = next[1];
        max = Math.max(x * x + y * y, max);
    }
    return max;
};

function go(x, y, dx, dy, steps, obMap) {
    for (let step = 0; step < steps; ++step) {
        let nx = x + dx;
        let ny = y + dy;
        if (obMap.has(nx) && obMap.get(nx).has(ny)) {
            break;
        }
        x = nx;
        y = ny;
    }
    return [x, y];
}

module.exports = robotSim;