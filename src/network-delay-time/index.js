/**
 * @param {number[][]} times
 * @param {number} N
 * @param {number} K
 * @return {number}
 */
const networkDelayTime = function (times, N, K) {
    let map = new Map();
    for (let time of times) {
        let subMap = map.get(time[0]);
        if (!subMap) {
            subMap = new Map();
            map.set(time[0], subMap);
        }
        subMap.set(time[1], time[2]);
    }
    let nodes = new Array(N + 1);
    nodes.fill(Number.POSITIVE_INFINITY);
    nodes[0] = nodes[K] = 0;
    if (bfs(map, nodes, K) < N) {
        return -1;
    }
    let maxTime = 0;
    nodes.forEach(t => { if (t > maxTime) { maxTime = t; } });
    return maxTime;
};

function bfs(map, nodes, source) {
    let level = [source];
    let signaledNodes = 1;
    while (level.length > 0) {
        let nextLevel = [];
        for (let src of level) {
            let targetMap = map.get(src);
            if (!targetMap) {
                continue;
            }
            for (let pair of targetMap) {
                let target = pair[0];
                let time = pair[1];
                let pushTargetAsSource = false;
                if (nodes[target] === Number.POSITIVE_INFINITY) {
                    ++signaledNodes;
                    pushTargetAsSource = true;
                }
                let timeToTarget = nodes[src] + time;
                if (timeToTarget < nodes[target]) {
                    nodes[target] = timeToTarget;
                    pushTargetAsSource = true;
                }
                if (pushTargetAsSource) {
                    nextLevel.push(target);
                }
            }
        }
        level = nextLevel;
    }
    return signaledNodes;
}

module.exports = networkDelayTime;