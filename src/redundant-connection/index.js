/**
 * @param {number[][]} edges
 * @return {number[]}
 */
const findRedundantConnection = function (edges) {
    let nodes = [];
    let nodeCount = 0;
    for (let i = 0; i < edges.length; ++i) {
        let start = edges[i][0];
        let end = edges[i][1];
        nodeCount = Math.max(nodeCount, end);
        if (!nodes[start]) {
            nodes[start] = [{ end: end, idx: i }];
        } else {
            nodes[start].push({ end: end, idx: i });
        }
        if (!nodes[end]) {
            nodes[end] = [{ end: start, idx: i }];
        } else {
            nodes[end].push({ end: start, idx: i });
        }
    }
    let visited = new Array(nodeCount + 1);
    visited.fill(false);
    return dfs(nodes, visited, 1, 0, [], []);
};

function dfs(nodes, visited, node, prevNode, edges, edgeIndices) {
    if (visited[node]) {
        let lastEdge = null, lastEdgeIdx = -1;
        while (edges.length > 0) {
            let edge = edges.pop();
            let edgeIdx = edgeIndices.pop();
            if (edgeIdx > lastEdgeIdx) {
                [lastEdge, lastEdgeIdx] = [edge, edgeIdx];
            }
            if (edge[0] === node) {
                break;
            }
        }
        if (lastEdge[0] > lastEdge[1]) {
            [lastEdge[0], lastEdge[1]] = [lastEdge[1], lastEdge[0]];
        }
        return lastEdge;
    }
    visited[node] = true;
    if (!nodes[node]) {
        return null;
    }
    for (let endInfo of nodes[node]) {
        if (endInfo.end === prevNode) {
            continue;
        }
        edges.push([node, endInfo.end]);
        edgeIndices.push(endInfo.idx);
        let ret = dfs(nodes, visited, endInfo.end, node, edges, edgeIndices);
        if (ret !== null) {
            return ret;
        }
        edges.pop();
        edgeIndices.pop();
    }
    return null;
}

module.exports = findRedundantConnection;