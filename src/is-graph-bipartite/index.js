/**
 * @param {number[][]} graph
 * @return {boolean}
 */
const isBipartite = function (graph) {
    let belongGroup = [];
    let assignedCount = 0;
    for (let i = 0; i < graph.length; ++i) {
        let currGroup = belongGroup[i] ? belongGroup[i] : 1;
        let count = bfs(graph, i, belongGroup, currGroup);
        if (count === -1) {
            return false;
        }
        assignedCount += count;
    }
    return assignedCount === graph.length;
};

function bfs(graph, idx, belongGroup, currGroup) {
    if (belongGroup[idx] && belongGroup[idx] !== currGroup) {
        return -1;
    }
    let count = 0;
    if (!belongGroup[idx]) {
        belongGroup[idx] = currGroup;
        ++count;
    }
    for (let edgeEnd of graph[idx]) {
        if (edgeEnd < idx) {
            continue;
        }
        let subCount = bfs(graph, edgeEnd, belongGroup, currGroup === 1 ? 2 : 1);
        if (subCount === -1) {
            return -1;
        }
        count += subCount;
    }
    return count;
}

module.exports = isBipartite;