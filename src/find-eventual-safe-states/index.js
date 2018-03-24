/**
 * @param {number[][]} graph
 * @return {number[]}
 */
const eventualSafeNodes = function (graph) {
    let visited = new Array(graph.length);
    visited.fill(false);
    let ret = [];
    let circleNodeSet = new Set();
    for (let node = 0; node < graph.length; ++node) {
        if (!visited[node]) {
            traverse(graph, visited, node, new Set(), circleNodeSet, ret);
        }
    }
    ret.sort((a, b) => a - b);
    return ret;
};

function traverse(graph, visited, curr, pathSet, circleNodeSet, ret) {
    if (pathSet.has(curr) || circleNodeSet.has(curr)) {
        for (let n of pathSet.keys()) {
            circleNodeSet.add(n);
        }
        return;
    }
    if (visited[curr]) {
        return;
    }
    visited[curr] = true;
    if (graph[curr].length === 0) {
        ret.push(curr);
        return;
    }
    pathSet.add(curr);
    for (let node of graph[curr]) {
        traverse(graph, visited, node, pathSet, circleNodeSet, ret);
    }
    pathSet.delete(curr);
    if (!circleNodeSet.has(curr)) {
        ret.push(curr);
    }
}

module.exports = eventualSafeNodes;